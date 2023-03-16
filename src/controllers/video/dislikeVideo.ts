import { NextFunction, Request, Response } from 'express'
import { Interaction } from '../../models'

export const dislikeVideo = async (req: Request, res: Response, next: NextFunction) => {
  console.log('disliking video')
  try {
    await Interaction.destroy({ where: { id: req.params.interaction_id } })
    return res.send({ success: true })
  } catch (err) {
    next(err)
  }
}
