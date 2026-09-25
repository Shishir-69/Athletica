/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Welcome.css'

const roles = [
  { id: 'student', title: 'Student', description: 'Track fitness, get personalized plans and improve.', icon: 'spark' },
  { id: 'teacher', title: 'Teacher', description: 'Monitor student progress and discover potential.', icon: 'people' },
  { id: 'community', title: 'Community Person', description: 'Access simple fitness guidance with low-connectivity support.', icon: 'pulse' },
]

function Icon({ name, size = 20 }) {
  const paths = {
    arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m7 10 5 5 5-5" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    eye: <><path d="M2.5 12s3.2-5 9.5-5 9.5 5 9.5 5-3.2 5-9.5 5-9.5-5-9.5-5Z" /><circle cx="12" cy="12" r="2.2" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    people: <><circle cx="9" cy="9" r="3" /><path d="M3.5 19c.5-3 2.3-4.6 5.5-4.6s5 1.6 5.5 4.6M16 6.8a3 3 0 0 1 0 5.7M16.4 14.7c2.2.4 3.5 1.8 4.1 4.3" /></>,
    pulse: <path d="M3 12h3l2-5 4 10 2.2-5H21" />,
    spark: <path d="m12 3 1.7 6.3L20 11l-6.3 1.7L12 19l-1.7-6.3L4 11l6.3-1.7L12 3Z" />,
    user: <><circle cx="12" cy="8" r="3.2" /><path d="M5 20c.7-3.2 3-5 7-5s6.3 1.8 7 5" /></>,
  }
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

function Brand() {
  return <a className="brand" href="#top" aria-label="Athletica home"><span className="brand-mark">A<span>+</span></span><span>ATHLETICA</span></a>
}

function LoginDialog({ selectedRole, onClose }) {
  const [role, setRole] = useState(selectedRole || 'student')
  const [showPassword, setShowPassword] = useState(false)
  const [feedback, setFeedback] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setFeedback('Sign in is ready to connect when authentication is enabled.')
  }

  return <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <section className="login-dialog" role="dialog" aria-modal="true" aria-labelledby="login-title">
      <button className="close-button" type="button" aria-label="Close sign in" onClick={onClose}><Icon name="close" size={20} /></button>
      <p className="dialog-kicker">WELCOME BACK</p>
      <h2 id="login-title">Continue your journey.</h2>
      <p className="dialog-copy">Choose your role first, then pick up where you left off.</p>
      <form onSubmit={handleSubmit}>
        <label className="field-label" htmlFor="login-role">Your role</label>
        <div className="select-field"><select id="login-role" value={role} onChange={(event) => setRole(event.target.value)}>{roles.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select><Icon name="chevron" size={18} /></div>
        <label className="field-label" htmlFor="login-username">Username or email</label>
        <div className="input-field"><Icon name="user" size={18} /><input id="login-username" type="text" autoComplete="username" placeholder="you@example.com" required /></div>
        <div className="password-label"><label className="field-label" htmlFor="login-password">Password</label><button type="button" onClick={() => setFeedback('Password reset is a frontend placeholder for now.')}>Forgot password?</button></div>
        <div className="input-field"><Icon name="lock" size={18} /><input id="login-password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" placeholder="Enter your password" required /><button className="input-action" type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(!showPassword)}><Icon name="eye" size={18} /></button></div>
        {feedback && <p className="dialog-feedback" role="status">{feedback}</p>}
        <button className="dialog-submit" type="submit">Sign In <Icon name="arrow" size={18} /></button>
      </form>
      <div className="dialog-divider"><span>OR</span></div>
      <button className="google-button" type="button" onClick={() => setFeedback('Google sign-in is a frontend placeholder for now.')}><b>G</b> Continue with Google</button>
      <p className="create-account">New to Athletica? <button type="button" onClick={() => setFeedback('Account creation is coming soon.')}>Create an account</button></p>
    </section>
  </div>
}

function ProgressVisual() {
  return <div className="hero-visual" aria-label="Athletica dashboard preview">
    <div className="visual-grid" />
    <div className="visual-orb orb-one" /><div className="visual-orb orb-two" />
    <div className="stat-card assessment-card"><div className="stat-icon mint"><Icon name="pulse" size={18} /></div><div><span>Assessment score</span><strong>84 <small>/ 100</small></strong></div><span className="trend">+12%</span></div>
    <div className="stat-card plan-card"><div className="plan-top"><div className="stat-icon orange"><Icon name="spark" size={17} /></div><span>AI focus plan</span><b>Today</b></div><strong>Build lower-body strength</strong><div className="plan-progress"><span /></div><small>3 of 4 sessions complete</small></div>
    <div className="progress-card"><div className="progress-heading"><div><span>Weekly progress</span><strong>Keep your rhythm</strong></div><span className="dots">•••</span></div><div className="chart"><i style={{ height: '36%' }} /><i style={{ height: '58%' }} /><i style={{ height: '46%' }} /><i className="active" style={{ height: '82%' }} /><i style={{ height: '66%' }} /><i style={{ height: '76%' }} /><i style={{ height: '52%' }} /></div><div className="chart-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div>
    <div className="discovery-chip"><span className="chip-avatar">✦</span><div><b>Potential unlocked</b><small>New talent insight is ready</small></div><Icon name="arrow" size={15} /></div>
    <div className="visual-tag tag-one"><span className="tag-dot mint-dot" />Personalized</div><div className="visual-tag tag-two"><span className="tag-dot lavender-dot" />Discover more</div>
  </div>
}

export default function Welcome() {
  const [activeRole, setActiveRole] = useState('student')
  const [loginOpen, setLoginOpen] = useState(false)
  const selected = roles.find((role) => role.id === activeRole)

  return <main id="top" className="welcome-page">
    <header className="site-header"><Brand /><nav aria-label="Main navigation"><a href="#about">About</a><a href="#how-it-works">How It Works</a><a href="#features">Features</a></nav><button className="header-signin" type="button" onClick={() => setLoginOpen(true)}>Sign In <Icon name="arrow" size={15} /></button></header>
    <section className="hero" id="about"><div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" />THE SMARTER WAY TO MOVE</div><h1>Welcome to<br /><em>Athletica</em></h1><p className="hero-subtitle">Your fitness journey, your way <span>—</span> wherever you are.</p><p className="hero-description">Assess your fitness, get guidance that adapts to you, track meaningful progress and discover what your body is capable of.</p><div className="hero-actions"><button className="primary-action" type="button" onClick={() => setLoginOpen(true)}>Get Started <Icon name="arrow" size={18} /></button><a className="secondary-action" href="#how-it-works">Explore Athletica <span className="play-icon">▶</span></a></div><div className="trust-row"><div className="avatar-stack"><span>J</span><span>M</span><span>A</span><span>+</span></div><p><strong>Built for every body</strong><br />A community that moves together</p></div></div><ProgressVisual /></section>
    <section className="experience-section" id="features"><div className="section-heading"><div><p className="section-kicker">YOUR PATH, YOUR PACE</p><h2>Choose your experience</h2></div><p>Start where you are. Athletica meets you there and grows with you.</p></div><div className="role-grid">{roles.map((role) => <button key={role.id} type="button" className={`role-card ${activeRole === role.id ? 'selected' : ''}`} onClick={() => setActiveRole(role.id)}><span className={`role-icon ${role.id}`}><Icon name={role.icon} size={23} /></span><span className="role-card-title">{role.title}</span><span className="role-card-description">{role.description}</span><span className="role-check"><Icon name="check" size={14} /></span></button>)}</div></section>
    <section className="how-section" id="how-it-works"><div className="how-badge"><Icon name="spark" size={20} /></div><div><p className="section-kicker">ONE PLATFORM, MANY POSSIBILITIES</p><h2>Progress looks different<br />for everyone.</h2></div><p className="how-copy">From your first assessment to your next personal best, AI-powered insights turn small actions into lasting momentum.</p><button className="outline-action" type="button" onClick={() => setLoginOpen(true)}>Find your starting point <Icon name="arrow" size={17} /></button></section>
    <footer className="site-footer"><Brand /><span>Move well. Live fully.</span><span>© 2026 Athletica</span></footer>
    {loginOpen && <LoginDialog selectedRole={selected?.id} onClose={() => setLoginOpen(false)} />}
  </main>
}