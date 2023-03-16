import express from 'express'
import { auth } from '../middleware/auth'
import {
  getVideoById,
  getVideos,
  getVideosByCreator,
  createVideo,
  updateVideo,
  updatePublished,
  dislikeVideo,
  likeVideo,
  getLiked,
} from '../controllers/video'

const router = express.Router()

// videos
router.get('/:video_id', auth, getVideoById)
router.get('/', auth, getVideos)
router.get('/creator/:creator_id', auth, getVideosByCreator)
router.post('/', auth, createVideo)
router.patch('/:video_id', auth, updateVideo)
router.patch('/publish/:video_id', auth, updatePublished)
// interactions
router.get('/like/:creator_id', auth, getLiked)
router.post('/like', auth, likeVideo)
router.post('/dislike/:interaction_id', auth, dislikeVideo)

export default router
