import { useState } from 'react'
import Login from './pages/login.jsx'
import WorkoutPlan from './pages/workout_plan.jsx'
import Nutrition from './pages/Nutrition.jsx'
import Wellness from './pages/Wellness.jsx'
import Progress from './pages/progress.jsx'
import TalentDiscovery from './pages/talent_discovery.jsx'
import Gamification from './pages/gamification.jsx'
import TeacherDashboard from './pages/teacher_dashboard.jsx'
import Dashboard from './pages/dashboard.jsx'
import Assessment from './pages/assessment.jsx'
import FitnessResult from './pages/Results.jsx'
import Leaderboard from './pages/leaderboard.jsx'
import CommunityFoodTest from './pages/CommunityFoodtest.jsx'
import CommunityFoodResults from './pages/CommunityFoodresults.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('login')
  const [currentRole, setCurrentRole] = useState('')
  const goTo = (page) => () => setCurrentPage(page)

  const sharedNavigation = {
    onAssessment: goTo('assessment'),
    onWorkoutPlan: goTo('workout'),
    onNutrition: goTo('nutrition'),
    onWellness: goTo('wellness'),
    onProgress: goTo('progress'),
    onTalent: goTo('talent'),
    onGamification: goTo('gamification'),
    onLeaderboard: goTo('leaderboard'),
  }

  const communityNavigation = {
    ...sharedNavigation,
    onCommunityFoodTest: goTo('community-food-test'),
  }

  if (currentPage === 'community-food-results' && currentRole === 'community') return <CommunityFoodResults {...communityNavigation} />
  if (currentPage === 'community-food-test' && currentRole === 'community') return <CommunityFoodTest onResults={goTo('community-food-results')} {...communityNavigation} />
  if (currentPage === 'results' && currentRole !== 'teacher') return <FitnessResult />
  if (currentPage === 'leaderboard' && currentRole !== 'teacher') return <Leaderboard {...sharedNavigation} />
  if (currentPage === 'assessment' && currentRole !== 'teacher') return <Assessment onDashboard={currentRole === 'student' ? goTo('dashboard') : undefined} onResults={goTo('results')} {...sharedNavigation} />
  if (currentPage === 'dashboard' && currentRole === 'student') return <Dashboard {...sharedNavigation} />
  if (currentPage === 'teacher' && currentRole === 'teacher') return <TeacherDashboard />
  if (currentPage === 'gamification' && currentRole !== 'teacher') return <Gamification {...sharedNavigation} />
  if (currentPage === 'talent' && currentRole !== 'teacher') return <TalentDiscovery {...sharedNavigation} />
  if (currentPage === 'progress' && currentRole !== 'teacher') return <Progress {...sharedNavigation} />
  if (currentPage === 'wellness' && currentRole !== 'teacher') return <Wellness {...sharedNavigation} />
  if (currentPage === 'nutrition' && currentRole !== 'teacher') return <Nutrition {...sharedNavigation} />
  if (currentPage === 'workout' && currentRole !== 'teacher') return <WorkoutPlan {...(currentRole === 'community' ? communityNavigation : sharedNavigation)} />

  return <Login onLogin={(role) => { setCurrentRole(role); setCurrentPage(role === 'teacher' ? 'teacher' : role === 'student' ? 'dashboard' : 'community-food-test') }} />
}

export default App