import { NextFunction, Request, Response } from 'express'
import { Video } from '../../models'

export const updatePublished = async (req: Request, res: Response, next: NextFunction) => {
  console.log('updating video publish')
  try {
    await Video.update(
      {
        published: req.body.published,
      },
      { where: { id: req.params.video_id } }
    )
    return res.send({ success: true })
  } catch (err) {
    next(err)
  }
}
