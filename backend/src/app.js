import express from 'express';
<<<<<<< Updated upstream
=======
import authRoutes from './routes/authRoutes.js';
import studentProfileRoutes from './routes/studentProfileRoutes.js';
import fitnessAssessmentRoutes from './routes/fitnessAssessmentRoutes.js';
>>>>>>> Stashed changes

const app = express();

app.use(express.json());

<<<<<<< Updated upstream
=======
app.use('/api/auth', authRoutes);
app.use('/api/student/profile', studentProfileRoutes);
app.use('/api/student/assessment', fitnessAssessmentRoutes);
app.use('/api/student', studentProfileRoutes);
app.use('/api/student', fitnessAssessmentRoutes);

>>>>>>> Stashed changes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Athletica API is running'
  });
});

export default app;
