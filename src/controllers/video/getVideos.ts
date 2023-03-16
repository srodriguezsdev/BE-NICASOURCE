import { NextFunction, Request, Response } from 'express'
import { Video } from '../../models'

export const getVideos = async (req: Request, res: Response, next: NextFunction) => {
  console.log('getting all videos')
  try {
    const videosDB = await Video.findAll({where: { published: true }, include: ['creator']})
    return res.send(videosDB)
  } catch (err) {
    next(err)
  }
}
