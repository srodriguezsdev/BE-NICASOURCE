import { NextFunction, Request, Response } from 'express'
import { Follow } from '../../models'

export const followCreator = async (req: Request, res: Response, next: NextFunction) => {
  console.log('following creator')
  try {
    if (!req.body.follower_creator_id || !req.body.followed_creator_id) res.status(400).send('fields follower_creator_id and followed_creator_id are required')
    await Follow.create({
      follower_creator_id: req.body.follower_creator_id,
      followed_creator_id: req.body.followed_creator_id,
    })
    return res.send({ success: true })
  } catch (err) {
    next(err)
  }
}
