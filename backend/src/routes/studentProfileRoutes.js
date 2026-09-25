import express from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import {
  createProfile,
  getProfile,
  updateProfile
} from '../controllers/studentProfileController.js';

const router = express.Router();

// All student profile routes require authentication
router.use(authenticate);

router.route('/')
  .post(createProfile)
  .get(getProfile)
  .put(updateProfile);

router.route('/profile')
  .post(createProfile)
  .get(getProfile)
  .put(updateProfile);

export default router;
