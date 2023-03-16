import { NextFunction, Request, Response } from 'express'
import { Follow } from '../../models'

export const unfollowCreator = async (req: Request, res: Response, next: NextFunction) => {
  console.log('following creator')
  try {
    await Follow.destroy({ where: { id: req.params.follow_id } })
    return res.send({ success: true })
  } catch (err) {
    next(err)
  }
}
