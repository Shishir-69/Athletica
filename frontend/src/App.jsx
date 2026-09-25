import { useState } from 'react'
import Login from './pages/login.jsx'
import WorkoutPlan from './pages/workout_plan.jsx'
import Nutrition from './pages/Nutrition.jsx'
import Wellness from './pages/Wellness.jsx'
import Progress from './pages/progress.jsx'
import TalentDiscovery from './pages/talent_discovery.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('login')

  if (currentPage === 'talent') {
    return <TalentDiscovery onWorkoutPlan={() => setCurrentPage('workout')} onNutrition={() => setCurrentPage('nutrition')} onWellness={() => setCurrentPage('wellness')} onProgress={() => setCurrentPage('progress')} />
  }

  if (currentPage === 'progress') {
    return <Progress onWorkoutPlan={() => setCurrentPage('workout')} onNutrition={() => setCurrentPage('nutrition')} onWellness={() => setCurrentPage('wellness')} onTalent={() => setCurrentPage('talent')} />
  }

  if (currentPage === 'wellness') {
    return <Wellness onWorkoutPlan={() => setCurrentPage('workout')} onNutrition={() => setCurrentPage('nutrition')} onProgress={() => setCurrentPage('progress')} onTalent={() => setCurrentPage('talent')} />
  }

  if (currentPage === 'nutrition') {
    return <Nutrition onWorkoutPlan={() => setCurrentPage('workout')} onWellness={() => setCurrentPage('wellness')} onProgress={() => setCurrentPage('progress')} onTalent={() => setCurrentPage('talent')} />
  }

  if (currentPage === 'workout') {
    return <WorkoutPlan onNutrition={() => setCurrentPage('nutrition')} onWellness={() => setCurrentPage('wellness')} onProgress={() => setCurrentPage('progress')} onTalent={() => setCurrentPage('talent')} />
  }

  return <Login onLogin={() => setCurrentPage('workout')} />
}

export default App