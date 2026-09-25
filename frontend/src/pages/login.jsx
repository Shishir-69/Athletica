/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Login.css'

const roleOptions = [
  { value: 'student', label: 'Student' },
  { value: 'teacher', label: 'Teacher' },
  { value: 'community', label: 'Community Person' },
]

function Icon({ name, size = 20 }) {
  const paths = {
    arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
    chevron: <path d="m7 10 5 5 5-5" />,
    eye: <><path d="M2.5 12s3.2-5 9.5-5 9.5 5 9.5 5-3.2 5-9.5 5-9.5-5Z" /><circle cx="12" cy="12" r="2.2" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    user: <><circle cx="12" cy="8" r="3.2" /><path d="M5 20c.7-3.2 3-5 7-5s6.3 1.8 7 5" /></>,
  }

  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

function BrandMark() {
  return <div className="login-brand-mark" aria-hidden="true">A<span>+</span></div>
}

export default function Login({ onLogin }) {
  const [role, setRole] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    if (loading) return

    setLoading(true)
    setFeedback('')

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
          role
        })
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok) {
        localStorage.setItem('athletica_token', data.token)
        localStorage.setItem('athletica_user', JSON.stringify({
          id: data.user?.id,
          name: data.user?.name,
          email: data.user?.email,
          role: data.user?.role
        }))

        if (onLogin) {
          onLogin(data.user)
        }
        return
      }

      if (response.status === 400) {
        setFeedback(data.message || 'Email, password and role are required')
      } else if (response.status === 401) {
        setFeedback('Invalid email or password')
      } else if (response.status === 403) {
        setFeedback('Role does not match this account')
      } else {
        setFeedback(data.message || 'Unable to connect to the server. Please try again.')
      }
    } catch {
      setFeedback('Unable to connect to the server. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return <main className="login-page">
    <div className="login-decoration decoration-one" aria-hidden="true" />
    <div className="login-decoration decoration-two" aria-hidden="true" />
    <div className="login-decoration decoration-three" aria-hidden="true"><span /></div>

    <section className="login-layout" aria-labelledby="login-heading">
      <header className="login-header">
        <a className="login-brand" href="/" aria-label="Athletica home"><BrandMark /><span>ATHLETICA</span></a>
        <span className="header-status"><i /> Move with purpose</span>
      </header>

      <div className="login-intro">
        <p className="login-kicker"><span /> YOUR SPACE TO MOVE</p>
        <h1 id="login-heading">Welcome to <em>Athletica</em></h1>
        <p className="login-tagline">Your fitness journey, your way <span>—</span> wherever you are.</p>
      </div>

      <section className="login-card" aria-label="Sign in to Athletica">
        <div className="card-topline"><span>WELCOME BACK</span><div className="card-mark"><BrandMark /></div></div>
        <h2>Let’s get moving.</h2>
        <p className="card-copy">Choose your role to continue to your personal space.</p>

        <form onSubmit={handleSubmit} noValidate>
          <label className="field-label" htmlFor="role">I am a</label>
          <div className="select-field">
            <select id="role" value={role} onChange={(event) => { setRole(event.target.value); setFeedback('') }}>
              <option value="">Select your role</option>
              {roleOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
            <Icon name="chevron" size={18} />
          </div>

          <label className="field-label" htmlFor="username">Username / Email</label>
          <div className="input-field"><Icon name="user" size={18} /><input id="username" type="text" autoComplete="username" placeholder="you@example.com" value={email} onChange={(event) => { setEmail(event.target.value); setFeedback('') }} /></div>

          <div className="password-heading"><label className="field-label" htmlFor="password">Password</label><button type="button" onClick={() => setFeedback('Password reset is a frontend placeholder for now.')}>Forgot password?</button></div>
          <div className="input-field"><Icon name="lock" size={18} /><input id="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" placeholder="Enter your password" value={password} onChange={(event) => { setPassword(event.target.value); setFeedback('') }} /><button className="password-toggle" type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(!showPassword)}><Icon name="eye" size={18} /></button></div>

          {feedback && <p className="login-feedback" role="status">{feedback}</p>}
          <button className="google-button" type="button" onClick={() => setFeedback('Google sign-in is a frontend placeholder for now.')}><span>G</span> Continue with Google</button>
          <div className="login-divider"><span>OR</span></div>
          <button className="sign-in-button" type="submit" disabled={loading}>{loading ? 'Signing In...' : <>Sign In <Icon name="arrow" size={18} /></>}</button>
        </form>

        <p className="create-account">New to Athletica? <button type="button" onClick={() => setFeedback('Account creation is coming soon.')}>Create an account</button></p>
      </section>

      <footer className="login-footer"><span>© 2026 Athletica</span><span>Move well. Live fully.</span></footer>
    </section>
  </main>
}