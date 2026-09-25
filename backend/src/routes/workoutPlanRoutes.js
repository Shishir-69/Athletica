import express from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import {
  createPlan,
  getActivePlan,
  getPlanHistory,
  updatePlan
} from '../controllers/workoutPlanController.js';

const router = express.Router();

// All workout plan routes require student authentication
router.use(authenticate);

router.route('/')
  .post(createPlan)
  .get(getActivePlan);

router.route('/history')
  .get(getPlanHistory);

router.route('/:planId')
  .put(updatePlan);

// Direct aliases to support mounting at either /api/student or /api/student/workout-plan
router.route('/workout-plan')
  .post(createPlan)
  .get(getActivePlan);

router.route('/workout-plan/history')
  .get(getPlanHistory);

router.route('/workout-plan/:planId')
  .put(updatePlan);

export default router;
