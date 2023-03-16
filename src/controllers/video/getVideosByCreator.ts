import { NextFunction, Request, Response } from 'express'
import { Video } from '../../models'

export const getVideosByCreator = async (req: Request, res: Response, next: NextFunction) => {
  console.log('getting all videos')
  try {
    const videosDB = await Video.findAll({where: { creator_id: req.params.creator_id }, include: ['creator']})
    return res.send(videosDB)
  } catch (err) {
    next(err)
  }
}
