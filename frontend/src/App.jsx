import { useState } from 'react'
import Login from './pages/login.jsx'
import WorkoutPlan from './pages/workout_plan.jsx'
import Nutrition from './pages/Nutrition.jsx'
import Wellness from './pages/Wellness.jsx'
import Progress from './pages/progress.jsx'
import TalentDiscovery from './pages/talent_discovery.jsx'
import Gamification from './pages/gamification.jsx'
import TeacherDashboard from './pages/teacher_dashboard.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('login')
  const goTo = (page) => () => setCurrentPage(page)

  if (currentPage === 'teacher') return <TeacherDashboard onWorkoutPlan={goTo('workout')} onNutrition={goTo('nutrition')} onWellness={goTo('wellness')} onProgress={goTo('progress')} onTalent={goTo('talent')} onGamification={goTo('gamification')} />
  if (currentPage === 'gamification') return <Gamification onWorkoutPlan={goTo('workout')} onNutrition={goTo('nutrition')} onWellness={goTo('wellness')} onProgress={goTo('progress')} onTalent={goTo('talent')} />
  if (currentPage === 'talent') return <TalentDiscovery onWorkoutPlan={goTo('workout')} onNutrition={goTo('nutrition')} onWellness={goTo('wellness')} onProgress={goTo('progress')} onGamification={goTo('gamification')} />
  if (currentPage === 'progress') return <Progress onWorkoutPlan={goTo('workout')} onNutrition={goTo('nutrition')} onWellness={goTo('wellness')} onTalent={goTo('talent')} onGamification={goTo('gamification')} />
  if (currentPage === 'wellness') return <Wellness onWorkoutPlan={goTo('workout')} onNutrition={goTo('nutrition')} onProgress={goTo('progress')} onTalent={goTo('talent')} onGamification={goTo('gamification')} />
  if (currentPage === 'nutrition') return <Nutrition onWorkoutPlan={goTo('workout')} onWellness={goTo('wellness')} onProgress={goTo('progress')} onTalent={goTo('talent')} onGamification={goTo('gamification')} />
  if (currentPage === 'workout') return <WorkoutPlan onNutrition={goTo('nutrition')} onWellness={goTo('wellness')} onProgress={goTo('progress')} onTalent={goTo('talent')} onGamification={goTo('gamification')} />

  return <Login onLogin={(role) => setCurrentPage(role === 'teacher' ? 'teacher' : 'workout')} />
}

export default App