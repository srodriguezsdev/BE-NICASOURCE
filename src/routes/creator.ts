import express from 'express'
import { auth } from '../middleware/auth'
import {
  followCreator,
  getCreatorById,
  signUpCreator,
  unfollowCreator,
  getFollowed,
  signInCreator,
} from '../controllers/creator'

const router = express.Router()

// creator
router.get('/:creator_id', auth, getCreatorById)
router.post('/signIn', signInCreator)
router.post('/signUp', signUpCreator)
// follow
router.get('/followed/:creator_id', auth, getFollowed)
router.post('/follow', auth, followCreator)
router.delete('/unfollow/:follow_id', auth, unfollowCreator)

export default router
