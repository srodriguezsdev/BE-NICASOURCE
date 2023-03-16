import { NextFunction, Request, Response } from 'express'
import { Interaction } from '../../models'

export const getLiked = async (req: Request, res: Response, next: NextFunction) => {
  console.log('getting liked videos')
  try {
    const interactionsDB = await Interaction.findAll({ where: { creator_id: req.params.creator_id }, include: ['creator', 'video'] })
    return res.send(interactionsDB)
  } catch (err) {
    next(err)
  }
}
