import { useState } from 'react'
import Login from './pages/login.jsx'
import WorkoutPlan from './pages/workout_plan.jsx'

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  return isSignedIn
    ? <WorkoutPlan />
    : <Login onLogin={() => setIsSignedIn(true)} />
}

export default App