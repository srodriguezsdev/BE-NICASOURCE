import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { Creator } from '../../models'
import { env } from '../../utils/environment'

export const signUpCreator = async (req: Request, res: Response, next: NextFunction) => {
  console.log('sign up creator')
  try {
    if (!req.body.email || !req.body.password || !req.body.name) res.status(400).send('email, name and password are required')
    const passwordHash = bcrypt.hashSync(req.body.password, 10)
    const creatorDB = await Creator.create({
      name: req.body.name,
      photo: req.body.photo,
      email: req.body.email,
      password: passwordHash,
    })
    const token = jwt.sign({ _id: creatorDB.id?.toString(), name: creatorDB.name }, env.jwtSecretKey as string, {
      expiresIn: '2 days',
    })
    return res.send({ token: token, creator_id: creatorDB.id?.toString() })
  } catch (err) {
    next(err)
  }
}
