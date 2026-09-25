import { useState } from 'react'
import Login from './pages/login.jsx'
import StudentDashboard from './pages/StudentDashboard.jsx'
import WorkoutPlan from './pages/workout_plan.jsx'
import Nutrition from './pages/Nutrition.jsx'
import Wellness from './pages/Wellness.jsx'
import Progress from './pages/progress.jsx'

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

  // Role: Student -> Navigates to existing Student Dashboard & student feature pages
  if (user.role === 'student') {
    if (currentPage === 'workout') {
      return (
        <WorkoutPlan
          onNutrition={() => setCurrentPage('nutrition')}
          onWellness={() => setCurrentPage('wellness')}
          onProgress={() => setCurrentPage('progress')}
          onDashboard={() => setCurrentPage('dashboard')}
        />
      )
    }

    if (currentPage === 'nutrition') {
      return (
        <Nutrition
          onWorkoutPlan={() => setCurrentPage('workout')}
          onWellness={() => setCurrentPage('wellness')}
          onProgress={() => setCurrentPage('progress')}
          onDashboard={() => setCurrentPage('dashboard')}
        />
      )
    }

    if (currentPage === 'wellness') {
      return (
        <Wellness
          onWorkoutPlan={() => setCurrentPage('workout')}
          onNutrition={() => setCurrentPage('nutrition')}
          onProgress={() => setCurrentPage('progress')}
          onDashboard={() => setCurrentPage('dashboard')}
        />
      )
    }

    if (currentPage === 'progress') {
      return (
        <Progress
          onWorkoutPlan={() => setCurrentPage('workout')}
          onNutrition={() => setCurrentPage('nutrition')}
          onWellness={() => setCurrentPage('wellness')}
          onDashboard={() => setCurrentPage('dashboard')}
        />
      )
    }

    return (
      <StudentDashboard
        user={user}
        onWorkoutPlan={() => setCurrentPage('workout')}
        onNutrition={() => setCurrentPage('nutrition')}
        onWellness={() => setCurrentPage('wellness')}
        onProgress={() => setCurrentPage('progress')}
        onLogout={handleLogout}
      />
    )
  }

  // Role: Teacher (no dedicated dashboard component exists yet)
  if (user.role === 'teacher') {
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
            <p className="login-kicker"><span></span> TEACHER PORTAL</p>
            <h2>Welcome, {user.name}!</h2>
            <p className="card-copy">You are successfully signed in as a Teacher ({user.email}).</p>
            <p style={{ marginTop: '1rem', color: '#666' }}>
              Teacher &amp; Institution dashboard features will be connected in the next phase.
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

  // Role: Community (no dedicated dashboard component exists yet)
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


