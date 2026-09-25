import express from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import {
  createAssessment,
  getLatestAssessment,
  getAssessmentHistory,
  updateAssessment
} from '../controllers/fitnessAssessmentController.js';

const router = express.Router();

// All fitness assessment routes require student authentication
router.use(authenticate);

router.route('/')
  .post(createAssessment)
  .get(getLatestAssessment);

router.route('/history')
  .get(getAssessmentHistory);

router.route('/:assessmentId')
  .put(updateAssessment);

// Direct aliases to support mounting at either /api/student or /api/student/assessment
router.route('/assessment')
  .post(createAssessment)
  .get(getLatestAssessment);

router.route('/assessment/history')
  .get(getAssessmentHistory);

router.route('/assessment/:assessmentId')
  .put(updateAssessment);

export default router;
