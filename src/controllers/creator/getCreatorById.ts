import { NextFunction, Request, Response } from 'express'
import { Creator } from '../../models'

export const getCreatorById = async (req: Request, res: Response, next: NextFunction) => {
  console.log('getting creator')
  try {
    const creatorId = parseInt(req.params.creator_id)
    const creatorDB = await Creator.findByPk(creatorId, { include: ['interactions', 'followed', 'followers', 'videos'] })
    return res.send(creatorDB)
  } catch (err) {
    console.log(err)
    next(err)
  }
}
