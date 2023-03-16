import { NextFunction, Request, Response } from 'express'
import { Video } from '../../models'

export const updateVideo = async (req: Request, res: Response, next: NextFunction) => {
  console.log('updating video')
  try {
    if (!req.body.email && !req.body.title) res.status(400).send('no field to update')
    const updateFields: { url?: string, title?: string} = {}
    if(req.body.url) updateFields['url'] = req.body.url
    if(req.body.title) updateFields['title'] = req.body.title
    await Video.update(
      updateFields,
      { where: { id: req.params.video_id } }
    )
    return res.send({ success: true })
  } catch (err) {
    next(err)
  }
}
