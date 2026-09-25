import React from "react";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import ProgressChart from "../components/ProgressChart";

function StudentDashboard() {

  return (
    <div className="dashboard-layout">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* TOP BAR */}
        <header className="topbar">

          <div className="search-box">
            🔍
            <input
              type="text"
              placeholder="Search..."
            />
          </div>

          <div className="topbar-right">

            <button className="notification">
              🔔
            </button>

            <div className="profile-circle">
              A
            </div>

          </div>

        </header>


        {/* WELCOME BANNER */}
        <section className="welcome-banner">

          <div>

            <p className="small-text">
              Student Dashboard
            </p>

            <h1>
              Good morning, Ananya! ☀️
            </h1>

            <p>
              Small steps today, big changes tomorrow.
            </p>

          </div>

          <div className="welcome-illustration">
            🏃‍♀️🌳
          </div>

        </section>


        {/* STAT CARDS */}
        <section className="stats-grid">

          <div className="fitness-score-card">

            <div>
              <p>Fitness Score</p>

              <div className="score-circle">
                <strong>82</strong>
                <span>/100</span>
              </div>

            </div>

            <div className="score-info">
              <span className="positive">
                ↑ 8%
              </span>

              <p>
                from last month
              </p>
            </div>

          </div>


          <StatCard
            icon="⭐"
            title="XP"
            value="1,250"
            subtitle="Level 3 • +200 today"
            className="xp-card"
          />


          <StatCard
            icon="🔥"
            title="Streak"
            value="7 Days"
            subtitle="Keep it up!"
            className="streak-card"
          />

        </section>


        {/* WORKOUT + QUICK ACTIONS */}
        <section className="middle-grid">

          {/* TODAY'S WORKOUT */}
          <div className="dashboard-card workout-card">

            <div className="card-title">

              <div>
                <h2>Today's Workout</h2>
                <p>Your planned activity</p>
              </div>

              <span className="badge">
                Today
              </span>

            </div>


            <div className="workout-content">

              <div className="workout-image">
                🏃
              </div>

              <div className="workout-details">

                <h3>
                  Full Body HIIT
                </h3>

                <p>
                  ⏱ 30 min &nbsp; • &nbsp; Moderate
                </p>

                <span>
                  A quick and effective workout
                  to boost your energy and endurance.
                </span>

              </div>

              <button className="primary-btn">
                Start Workout
              </button>

            </div>

          </div>


          {/* QUICK ACTIONS */}
          <div className="dashboard-card">

            <div className="card-title">

              <div>
                <h2>Quick Actions</h2>
                <p>Manage your fitness journey</p>
              </div>

            </div>


            <div className="quick-actions">

              <button>
                <span>📝</span>
                <div>
                  <strong>Take Assessment</strong>
                  <small>Update your fitness data</small>
                </div>
                →
              </button>

              <button>
                <span>🏃</span>
                <div>
                  <strong>View Workout Plan</strong>
                  <small>See today's exercises</small>
                </div>
                →
              </button>

              <button>
                <span>❤️</span>
                <div>
                  <strong>Check Wellness</strong>
                  <small>Track your wellbeing</small>
                </div>
                →
              </button>

              <button>
                <span>📊</span>
                <div>
                  <strong>Track Progress</strong>
                  <small>View your improvement</small>
                </div>
                →
              </button>

            </div>

          </div>

        </section>


        {/* LOWER SECTION */}
        <section className="bottom-grid">

          {/* PROGRESS */}
          <div className="dashboard-card progress-card">

            <div className="card-title">

              <div>
                <h2>Your Progress</h2>
                <p>Track your fitness improvement</p>
              </div>

              <button className="view-btn">
                View Details
              </button>

            </div>

            <ProgressChart />

          </div>


          {/* ACHIEVEMENTS */}
          <div className="dashboard-card">

            <div className="card-title">

              <div>
                <h2>Recent Achievements</h2>
                <p>Your latest milestones</p>
              </div>

            </div>


            <div className="achievement">

              <div className="achievement-icon">
                🔥
              </div>

              <div>
                <h3>7 Day Streak</h3>
                <p>Completed workouts for 7 days</p>
              </div>

              <span>
                +100 XP
              </span>

            </div>


            <div className="achievement">

              <div className="achievement-icon">
                🏆
              </div>

              <div>
                <h3>Fitness Milestone</h3>
                <p>Reached fitness score 80+</p>
              </div>

              <span>
                +150 XP
              </span>

            </div>


            <div className="achievement">

              <div className="achievement-icon">
                🍎
              </div>

              <div>
                <h3>Nutrition Goal</h3>
                <p>Completed your daily nutrition goal</p>
              </div>

              <span>
                +50 XP
              </span>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default StudentDashboard;