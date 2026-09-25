/* eslint-disable react/prop-types */
import { useState } from "react";
import "./leaderboard.css";

const Leaderboard = ({ onWorkoutPlan, onNutrition, onWellness, onProgress, onTalent, onGamification }) => {
  const [period, setPeriod] = useState("Weekly");

  const leaderboardData = {
    Weekly: [
      { rank: 1, name: "Aarav R.", xp: 1850, level: 5, badge: "🏆" },
      { rank: 2, name: "Priya S.", xp: 1720, level: 5, badge: "🥈" },
      { rank: 3, name: "Rahul K.", xp: 1600, level: 4, badge: "🥉" },
      { rank: 4, name: "Ananya S.", xp: 1450, level: 4, badge: "⭐" },
      { rank: 5, name: "You", xp: 1250, level: 3, badge: "✦" },
      { rank: 6, name: "Diya K.", xp: 1180, level: 3, badge: "⭐" },
      { rank: 7, name: "Rohan M.", xp: 1090, level: 3, badge: "⭐" },
    ],

    Monthly: [
      { rank: 1, name: "Priya S.", xp: 6200, level: 8, badge: "🏆" },
      { rank: 2, name: "Aarav R.", xp: 5900, level: 7, badge: "🥈" },
      { rank: 3, name: "Rahul K.", xp: 5400, level: 7, badge: "🥉" },
      { rank: 4, name: "You", xp: 4800, level: 6, badge: "✦" },
      { rank: 5, name: "Ananya S.", xp: 4500, level: 6, badge: "⭐" },
    ],

    "All Time": [
      { rank: 1, name: "Aarav R.", xp: 15200, level: 15, badge: "🏆" },
      { rank: 2, name: "Priya S.", xp: 14100, level: 14, badge: "🥈" },
      { rank: 3, name: "Rahul K.", xp: 13200, level: 13, badge: "🥉" },
      { rank: 4, name: "Ananya S.", xp: 11900, level: 12, badge: "⭐" },
      { rank: 5, name: "You", xp: 10500, level: 11, badge: "✦" },
    ],
  };

  const currentData = leaderboardData[period];

  return (
    <div className="leaderboard-page">

      {/* ================= SIDEBAR ================= */}

      <aside className="leaderboard-sidebar">

        <div className="leaderboard-logo">
          <div className="leaderboard-logo-mark">A</div>
          <span>ATHLETICA</span>
        </div>

        <nav className="leaderboard-nav">

          <button type="button" onClick={() => {}} className="leaderboard-nav-item">
            <span>⌂</span>
            Dashboard
          </button>

          <button type="button" onClick={onWorkoutPlan} className="leaderboard-nav-item">
            <span>▤</span>
            Workout Plan
          </button>

          <button type="button" onClick={onNutrition} className="leaderboard-nav-item">
            <span>◉</span>
            Nutrition
          </button>

          <button type="button" onClick={onWellness} className="leaderboard-nav-item">
            <span>♡</span>
            Wellness
          </button>

          <button type="button" onClick={onProgress} className="leaderboard-nav-item">
            <span>◒</span>
            Progress
          </button>

          <button type="button" onClick={onTalent} className="leaderboard-nav-item">
            <span>♙</span>
            Talent Discovery
          </button>

          <button type="button" onClick={onGamification} className="leaderboard-nav-item">
            <span>✧</span>
            Gamification
          </button>

          <button type="button" className="leaderboard-nav-item active">
            <span>♛</span>
            Leaderboard
          </button>

        </nav>

        <div className="leaderboard-language">
          <span>◉</span>
          <span>English</span>
          <span>⌄</span>
        </div>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="leaderboard-main">

        {/* Top Bar */}

        <header className="leaderboard-topbar">

          <div className="leaderboard-search">
            <span>⌕</span>
            <span>Search...</span>
          </div>

          <div className="leaderboard-profile">
            <button>♧</button>

            <div className="leaderboard-profile-circle">
              S
            </div>
          </div>

        </header>


        {/* Page Heading */}

        <section className="leaderboard-heading">

          <div>
            <h1>Leaderboard</h1>

            <p>
              Challenge yourself, stay consistent and climb the ranks.
            </p>
          </div>

        </section>


        {/* ================= YOUR RANK ================= */}

        <section className="your-rank-card">

          <div className="rank-left">

            <div className="rank-icon">
              ♛
            </div>

            <div>
              <p>Your Current Rank</p>
              <h2>#{period === "Weekly" ? "5" : period === "Monthly" ? "4" : "5"}</h2>
            </div>

          </div>

          <div className="rank-stat">
            <span>XP</span>
            <strong>
              {period === "Weekly"
                ? "1,250"
                : period === "Monthly"
                ? "4,800"
                : "10,500"}
            </strong>
          </div>

          <div className="rank-stat">
            <span>Level</span>
            <strong>
              {period === "Weekly"
                ? "3"
                : period === "Monthly"
                ? "6"
                : "11"}
            </strong>
          </div>

        </section>


        {/* ================= PERIOD TABS ================= */}

        <div className="leaderboard-tabs">

          {["Weekly", "Monthly", "All Time"].map((item) => (
            <button
              key={item}
              className={
                period === item
                  ? "leaderboard-tab active"
                  : "leaderboard-tab"
              }
              onClick={() => setPeriod(item)}
            >
              {item}
            </button>
          ))}

        </div>


        {/* ================= TOP THREE ================= */}

        <section className="top-three">

          {currentData.slice(0, 3).map((user) => (
            <div
              className={`top-user top-user-${user.rank}`}
              key={user.rank}
            >

              <div className="top-rank">
                {user.rank}
              </div>

              <div className="top-avatar">
                {user.name.charAt(0)}
              </div>

              <h3>{user.name}</h3>

              <p>{user.xp.toLocaleString()} XP</p>

              <div className="top-badge">
                {user.badge}
              </div>

            </div>
          ))}

        </section>


        {/* ================= LEADERBOARD TABLE ================= */}

        <section className="leaderboard-table-card">

          <div className="leaderboard-table-title">
            <h2>{period} Rankings</h2>

            <span>
              {currentData.length} participants
            </span>
          </div>


          <div className="leaderboard-table">

            <div className="leaderboard-table-header">
              <span>Rank</span>
              <span>User</span>
              <span>Level</span>
              <span>XP</span>
              <span>Badge</span>
            </div>


            {currentData.map((user) => (
              <div
                key={user.name}
                className={
                  user.name === "You"
                    ? "leaderboard-row current-user"
                    : "leaderboard-row"
                }
              >

                <span className="user-rank">
                  #{user.rank}
                </span>

                <div className="leaderboard-user">

                  <div className="leaderboard-avatar">
                    {user.name.charAt(0)}
                  </div>

                  <span>{user.name}</span>

                </div>

                <span className="user-level">
                  Level {user.level}
                </span>

                <strong className="user-xp">
                  {user.xp.toLocaleString()} XP
                </strong>

                <span className="user-badge">
                  {user.badge}
                </span>

              </div>
            ))}

          </div>

        </section>

      </main>

    </div>
  );
};

export default Leaderboard;