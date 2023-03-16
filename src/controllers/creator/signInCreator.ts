import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { Creator } from '../../models'
import { env } from '../../utils/environment'

export const signInCreator = async (req: Request, res: Response, next: NextFunction) => {
  console.log('sign in creator')
  try {
    if (!req.body.email || !req.body.password) res.status(400).send('email and password are required')
    const creatorDB = await Creator.findOne({ where: { email: req.body.email } })
    if (!creatorDB) throw new Error('email not found')
    const passwordValid = bcrypt.compareSync(req.body.password, creatorDB.password)
    if (passwordValid) {
      const token = jwt.sign({ _id: creatorDB.id?.toString(), name: creatorDB.name }, env.jwtSecretKey as string, {
        expiresIn: '2 days',
      })
      return res.send({ token: token, creator_id: creatorDB.id?.toString() })
    } else {
      throw new Error('password is not correct')
    }
  } catch (err: unknown) {
    next(err)
  }
}
