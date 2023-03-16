import { NextFunction, Request, Response } from 'express'
import { Follow } from '../../models'

export const getFollowed = async (req: Request, res: Response, next: NextFunction) => {
  console.log('getting followed')
  try {
    const followingDB = await Follow.findAll({ where: { follower_creator_id: req.params.creator_id }, include: ['followed'] })
    return res.send(followingDB)
  } catch (err) {
    next(err)
  }
}
