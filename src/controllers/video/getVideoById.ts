import { NextFunction, Request, Response } from 'express'
import { Video } from '../../models'

export const getVideoById = async (req: Request, res: Response, next: NextFunction) => {
  console.log('getting creator')
  try {
    const videoId = parseInt(req.params.video_id)
    const videoDB = await Video.findByPk(videoId, { include: ['creator']})
    return res.send(videoDB)
  } catch (err) {
    next(err)
  }
}
