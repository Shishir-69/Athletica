import "./Results.css";

function FitnessResult() {
  return (
    <div className="athletica-app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <span className="logo-icon">A</span>
          <div>
            <h2>ATHLETICA</h2>
            <p>Better Fitness, Brighter Future</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <a href="#">⌂ <span>Dashboard</span></a>
          <a href="#" className="active">◉ <span>Assessment</span></a>
          <a href="#">♧ <span>Workout Plan</span></a>
          <a href="#">◒ <span>Nutrition</span></a>
          <a href="#">♡ <span>Wellness</span></a>
          <a href="#">↗ <span>Progress</span></a>
          <a href="#">★ <span>Talent Discovery</span></a>
          <a href="#">▣ <span>Gamification</span></a>
        </nav>

        <div className="sidebar-bottom">
          <span>◉</span>
          <span>English</span>
        </div>
      </aside>

      {/* Main content */}
      <main className="main-content">

        {/* Top bar */}
        <header className="topbar">
          <div className="search-box">
            🔍
            <input
              type="text"
              placeholder="Search..."
            />
          </div>

          <div className="topbar-right">
            <span className="notification">♧</span>
            <div className="profile">A</div>
          </div>
        </header>

        {/* Page heading */}
        <section className="result-header">
          <div>
            <h1>Your Fitness Result</h1>
            <p>
              Here is your personalized fitness assessment summary.
            </p>
          </div>

          <div className="header-actions">
            <button className="icon-button">⇩</button>
            <button className="icon-button">♧</button>
          </div>
        </section>

        {/* Result overview */}
        <section className="result-overview">

          {/* Score Card */}
          <div className="score-card">

            <div className="score-circle">
              <div className="score-inner">
                <span>Fitness Score</span>
                <strong>82</strong>
                <small>/100</small>
                <b>Good</b>
              </div>
            </div>

            <div className="score-description">
              <h3>Great job!</h3>
              <p>
                Your current fitness level is above average.
                Keep following your personalized plan to improve further.
              </p>
            </div>

          </div>

          {/* Achievement */}
          <div className="achievement-card">
            <div className="trophy">🏆</div>

            <h3>You&apos;ve been doing great</h3>

            <p>
              You have achieved a good fitness level.
              Keep pushing toward your next goal!
            </p>

            <div className="achievement-line">
              <span>Current Level</span>
              <strong>Good</strong>
            </div>
          </div>

        </section>

        {/* Statistics */}
        <section className="stats-section">
          <h2>Your Stats</h2>

          <div className="stats-grid">

            <div className="stat-card green">
              <span className="stat-label">BMI</span>
              <strong>21.3</strong>
              <span className="stat-status">Healthy</span>
            </div>

            <div className="stat-card blue">
              <span className="stat-label">Body Fat</span>
              <strong>16%</strong>
              <span className="stat-status">Normal</span>
            </div>

            <div className="stat-card orange">
              <span className="stat-label">Strength</span>
              <strong>Good</strong>
              <span className="stat-status">↑ Improving</span>
            </div>

            <div className="stat-card purple">
              <span className="stat-label">Endurance</span>
              <strong>Good</strong>
              <span className="stat-status">↑ Improving</span>
            </div>

          </div>
        </section>

        {/* Recommendations */}
        <section className="recommendation-card">
          <div>
            <span className="recommendation-icon">💡</span>
          </div>

          <div>
            <h3>Your Fitness Summary</h3>
            <p>
              Your results show a balanced fitness level. Focus on
              maintaining your current activity while gradually improving
              strength, endurance and flexibility.
            </p>
          </div>
        </section>

        {/* Button */}
        <button className="report-button">
          View Detailed Report →
        </button>

      </main>
    </div>
  );
}

export default FitnessResult;