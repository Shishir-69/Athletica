import { useState } from 'react'
import Login from './pages/login.jsx'
import StudentDashboard from './pages/StudentDashboard.jsx'
import WorkoutPlan from './pages/workout_plan.jsx'
import Nutrition from './pages/Nutrition.jsx'
import Wellness from './pages/Wellness.jsx'
import Progress from './pages/progress.jsx'
import TeacherDashboard from './pages/teacher_dashboard.jsx'
import Gamification from './pages/gamification.jsx'
import TalentDiscovery from './pages/talent_discovery.jsx'

function App() {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('athletica_user')
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  })

  const [currentPage, setCurrentPage] = useState('dashboard')

  const handleLogin = (authenticatedUser) => {
    setUser(authenticatedUser)
    setCurrentPage('dashboard')
  }

  const handleLogout = () => {
    localStorage.removeItem('athletica_token')
    localStorage.removeItem('athletica_user')
    setUser(null)
    setCurrentPage('login')
  }

  if (!user) {
    return <Login onLogin={handleLogin} />
  }

  const goTo = (page) => () => setCurrentPage(page)

  // Role: Student
  if (user.role === 'student') {
    if (currentPage === 'workout') {
      return (
        <WorkoutPlan
          onNutrition={goTo('nutrition')}
          onWellness={goTo('wellness')}
          onProgress={goTo('progress')}
          onDashboard={goTo('dashboard')}
          onTalent={goTo('talent')}
          onGamification={goTo('gamification')}
        />
      )
    }

    if (currentPage === 'nutrition') {
      return (
        <Nutrition
          onWorkoutPlan={goTo('workout')}
          onWellness={goTo('wellness')}
          onProgress={goTo('progress')}
          onDashboard={goTo('dashboard')}
          onTalent={goTo('talent')}
          onGamification={goTo('gamification')}
        />
      )
    }

    if (currentPage === 'wellness') {
      return (
        <Wellness
          onWorkoutPlan={goTo('workout')}
          onNutrition={goTo('nutrition')}
          onProgress={goTo('progress')}
          onDashboard={goTo('dashboard')}
          onTalent={goTo('talent')}
          onGamification={goTo('gamification')}
        />
      )
    }

    if (currentPage === 'progress') {
      return (
        <Progress
          onWorkoutPlan={goTo('workout')}
          onNutrition={goTo('nutrition')}
          onWellness={goTo('wellness')}
          onDashboard={goTo('dashboard')}
          onTalent={goTo('talent')}
          onGamification={goTo('gamification')}
        />
      )
    }

    if (currentPage === 'gamification') {
      return (
        <Gamification
          onWorkoutPlan={goTo('workout')}
          onNutrition={goTo('nutrition')}
          onWellness={goTo('wellness')}
          onProgress={goTo('progress')}
          onTalent={goTo('talent')}
          onDashboard={goTo('dashboard')}
        />
      )
    }

    if (currentPage === 'talent') {
      return (
        <TalentDiscovery
          onWorkoutPlan={goTo('workout')}
          onNutrition={goTo('nutrition')}
          onWellness={goTo('wellness')}
          onProgress={goTo('progress')}
          onGamification={goTo('gamification')}
          onDashboard={goTo('dashboard')}
        />
      )
    }

    return (
      <StudentDashboard
        user={user}
        onWorkoutPlan={goTo('workout')}
        onNutrition={goTo('nutrition')}
        onWellness={goTo('wellness')}
        onProgress={goTo('progress')}
        onTalent={goTo('talent')}
        onGamification={goTo('gamification')}
        onLogout={handleLogout}
      />
    )
  }

  // Role: Teacher
  if (user.role === 'teacher') {
    return (
      <TeacherDashboard
        onWorkoutPlan={goTo('workout')}
        onNutrition={goTo('nutrition')}
        onWellness={goTo('wellness')}
        onProgress={goTo('progress')}
        onTalent={goTo('talent')}
        onGamification={goTo('gamification')}
        onLogout={handleLogout}
      />
    )
  }

  // Role: Community
  if (user.role === 'community') {
    return (
      <main className="login-page">
        <section className="login-layout">
          <header className="login-header">
            <a className="login-brand" href="/" aria-label="Athletica home">
              <div className="login-brand-mark">A<span>+</span></div>
              <span>ATHLETICA</span>
            </a>
          </header>
          <section className="login-card" style={{ maxWidth: '600px', margin: '40px auto' }}>
            <p className="login-kicker"><span></span> COMMUNITY PORTAL</p>
            <h2>Welcome, {user.name}!</h2>
            <p className="card-copy">You are successfully signed in as a Community Member ({user.email}).</p>
            <p style={{ marginTop: '1rem', color: '#666' }}>
              Community space &amp; leaderboard features will be connected in the next phase.
            </p>
            <button
              className="sign-in-button"
              style={{ marginTop: '1.5rem' }}
              type="button"
              onClick={handleLogout}
            >
              Sign Out
            </button>
          </section>
        </section>
      </main>
    )
  }

  return <Login onLogin={handleLogin} />
}

export default App
