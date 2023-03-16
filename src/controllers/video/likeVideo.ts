import { NextFunction, Request, Response } from 'express'
import { Interaction } from '../../models'

export const likeVideo = async (req: Request, res: Response, next: NextFunction) => {
  console.log('liking video')
  try {
    if (!req.body.creator_id || !req.body.video_id) res.status(400).send('fields creator_id and video_id are required')
    await Interaction.create({
      creator_id: req.body.creator_id,
      video_id: req.body.video_id,
    })
    return res.send({ success: true })
  } catch (err) {
    next(err)
  }
}
