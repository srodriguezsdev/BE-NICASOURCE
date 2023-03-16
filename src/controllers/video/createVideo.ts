import { NextFunction, Request, Response } from 'express'
import { Video } from '../../models'

export const createVideo = async (req: Request, res: Response, next: NextFunction) => {
  console.log('creating video')
  if (!req.body.creator_id || !req.body.url) res.status(400).send('fields creator_id and url are required')
  try {
    await Video.create({
      creator_id: req.body.creator_id,
      url: req.body.url,
      title: req.body.title,
      published: false,
    })
    return res.send({ success: true })
  } catch (err) {
    next(err)
  }
}
