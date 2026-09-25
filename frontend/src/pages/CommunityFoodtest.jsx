/* eslint-disable react/prop-types */
import { useState } from "react";
import "./CommunityFoodtest.css";

function CommunityFoodFitness({ onWorkoutPlan, onNutrition, onWellness, onProgress, onGamification, onLeaderboard, onResults }) {
  const [workType, setWorkType] = useState("Farming / Agriculture");
  const [activeHours, setActiveHours] = useState("4–6 hours");

  const [foods, setFoods] = useState({
    rice: true,
    ragi: false,
    dal: true,
    vegetables: true,
    fruits: false,
    eggs: false,
    milk: true,
    curd: true,
    groundnuts: false,
  });

  const toggleFood = (food) => {
    setFoods({
      ...foods,
      [food]: !foods[food],
    });
  };

  const foodCount = Object.values(foods).filter(Boolean).length;

  const calculateScore = () => {
    let score = 50;

    // Activity-based adjustment
    if (workType === "Farming / Agriculture") score += 8;
    if (workType === "Construction / Labour") score += 6;
    if (workType === "Household Work") score += 4;
    if (workType === "Walking / Outdoor Work") score += 5;
    if (workType === "Sports / Physical Activity") score += 7;

    // Food variety
    score += foodCount * 3;

    // Keep score within 0–100
    return Math.min(score, 100);
  };

  const score = calculateScore();

  const getScoreMessage = () => {
    if (score >= 80) {
      return "Your reported food pattern appears reasonably aligned with your daily activity.";
    }

    if (score >= 65) {
      return "Your food provides some support for your daily activity, but there are areas you can improve.";
    }

    return "Your reported activity is high compared with the variety of foods you reported. Consider improving food variety and hydration.";
  };

  return (
    <div className="community-page">

      {/* Sidebar */}
      <aside className="community-sidebar">

        <div className="community-logo">
          <div className="logo-icon">A</div>
          <span>ATHLETICA</span>
        </div>

        <nav className="community-nav">

          <button type="button" onClick={onWorkoutPlan} className="community-nav-item">
            <span>⌂</span>
            Dashboard
          </button>

          <button type="button" onClick={onWorkoutPlan} className="community-nav-item">
            <span>🏃</span>
            Workout Plan
          </button>

          <button type="button" onClick={onNutrition} className="community-nav-item">
            <span>🥗</span>
            Nutrition
          </button>

          <button type="button" onClick={onWellness} className="community-nav-item">
            <span>♥</span>
            Wellness
          </button>

          <button type="button" onClick={onProgress} className="community-nav-item">
            <span>📈</span>
            Progress
          </button>

          <button type="button" onClick={onGamification} className="community-nav-item">
            <span>🏆</span>
            Gamification
          </button>

          <button type="button" onClick={onLeaderboard} className="community-nav-item">
            <span>🏅</span>
            Leaderboard
          </button>

          <button type="button" className="community-nav-item active">
            <span>🌾</span>
            Food & Fitness
          </button>

        </nav>

      </aside>

      {/* Main */}
      <main className="community-main">

        {/* Top bar */}
        <header className="community-header">

          <div className="community-search">
            🔍
            <input
              type="text"
              placeholder="Search..."
            />
          </div>

          <div className="community-profile">
            <div className="profile-avatar">U</div>
            <div>
              <strong>User</strong>
              <small>Community</small>
            </div>
          </div>

        </header>

        {/* Page heading */}
        <section className="community-title">

          <div>
            <h1>Does Your Food Fuel Your Work?</h1>

            <p>
              See how your daily food supports the work and activity you do.
            </p>
          </div>

          <div className="offline-badge">
            ● Offline Ready
          </div>

        </section>


        {/* Food Work Score */}
        <section className="score-section">

          <div className="score-card">

            <div className="score-left">

              <span className="score-label">
                FOOD–WORK FIT
              </span>

              <h2>{score}<span>/100</span></h2>

              <p>
                {getScoreMessage()}
              </p>

            </div>

            <div className="score-circle">
              <div>
                <strong>{score}</strong>
                <small>FIT</small>
              </div>
            </div>

          </div>


          <div className="score-info">

            <div className="score-info-card">
              <div className="info-icon green">⚡</div>
              <div>
                <span>Energy Support</span>
                <strong>Good</strong>
              </div>
            </div>

            <div className="score-info-card">
              <div className="info-icon orange">💪</div>
              <div>
                <span>Protein Sources</span>
                <strong>Moderate</strong>
              </div>
            </div>

            <div className="score-info-card">
              <div className="info-icon purple">🥬</div>
              <div>
                <span>Food Variety</span>
                <strong>Good</strong>
              </div>
            </div>

            <div className="score-info-card">
              <div className="info-icon blue">💧</div>
              <div>
                <span>Hydration</span>
                <strong>Needs Attention</strong>
              </div>
            </div>

          </div>

        </section>


        {/* Daily Work */}
        <section className="community-card">

          <div className="section-heading">
            <div>
              <h2>🌾 Your Daily Work</h2>
              <p>
                Tell us what you normally do during the day.
              </p>
            </div>
          </div>

          <div className="form-grid">

            <div className="form-group">

              <label>
                What kind of work do you usually do?
              </label>

              <select
                value={workType}
                onChange={(e) => setWorkType(e.target.value)}
              >
                <option>Farming / Agriculture</option>
                <option>Construction / Labour</option>
                <option>Household Work</option>
                <option>Walking / Outdoor Work</option>
                <option>Mostly Sitting</option>
                <option>Sports / Physical Activity</option>
                <option>Mixed Activities</option>
              </select>

            </div>


            <div className="form-group">

              <label>
                How many hours are you physically active?
              </label>

              <select
                value={activeHours}
                onChange={(e) => setActiveHours(e.target.value)}
              >
                <option>Less than 1 hour</option>
                <option>1–2 hours</option>
                <option>2–4 hours</option>
                <option>4–6 hours</option>
                <option>6+ hours</option>
              </select>

            </div>

          </div>

          <div className="activity-summary">

            <div className="activity-icon">
              🌾
            </div>

            <div>
              <strong>{workType}</strong>
              <p>
                Reported active time: <b>{activeHours}</b>
              </p>
            </div>

            <span className="activity-level">
              Active Day
            </span>

          </div>

        </section>


        {/* Food Section */}
        <section className="community-card">

          <div className="section-heading">

            <div>
              <h2>🍚 What Did You Eat Today?</h2>

              <p>
                Select the foods you had today.
              </p>
            </div>

            <span className="food-count">
              {foodCount} foods selected
            </span>

          </div>


          <div className="food-grid">

            <button
              className={`food-item ${foods.rice ? "selected" : ""}`}
              onClick={() => toggleFood("rice")}
            >
              <span>🍚</span>
              <strong>Rice</strong>
            </button>

            <button
              className={`food-item ${foods.ragi ? "selected" : ""}`}
              onClick={() => toggleFood("ragi")}
            >
              <span>🌾</span>
              <strong>Ragi / Millet</strong>
            </button>

            <button
              className={`food-item ${foods.dal ? "selected" : ""}`}
              onClick={() => toggleFood("dal")}
            >
              <span>🥣</span>
              <strong>Dal / Pulses</strong>
            </button>

            <button
              className={`food-item ${foods.vegetables ? "selected" : ""}`}
              onClick={() => toggleFood("vegetables")}
            >
              <span>🥬</span>
              <strong>Vegetables</strong>
            </button>

            <button
              className={`food-item ${foods.fruits ? "selected" : ""}`}
              onClick={() => toggleFood("fruits")}
            >
              <span>🍎</span>
              <strong>Fruits</strong>
            </button>

            <button
              className={`food-item ${foods.eggs ? "selected" : ""}`}
              onClick={() => toggleFood("eggs")}
            >
              <span>🥚</span>
              <strong>Eggs</strong>
            </button>

            <button
              className={`food-item ${foods.milk ? "selected" : ""}`}
              onClick={() => toggleFood("milk")}
            >
              <span>🥛</span>
              <strong>Milk</strong>
            </button>

            <button
              className={`food-item ${foods.curd ? "selected" : ""}`}
              onClick={() => toggleFood("curd")}
            >
              <span>🥣</span>
              <strong>Curd</strong>
            </button>

            <button
              className={`food-item ${foods.groundnuts ? "selected" : ""}`}
              onClick={() => toggleFood("groundnuts")}
            >
              <span>🥜</span>
              <strong>Groundnuts</strong>
            </button>

          </div>

        </section>


        {/* Balance */}
        <section className="balance-card">

          <div className="balance-header">

            <div>
              <span>FOOD × ACTIVITY BALANCE</span>
              <h2>How well do they fit together?</h2>
            </div>

            <strong>{score}/100</strong>

          </div>

          <div className="balance-bar">
            <div
              className="balance-progress"
              style={{ width: `${score}%` }}
            ></div>
          </div>

          <p>
            Your score considers your reported daily activity and the variety
            of foods you selected. It is intended as a simple wellness
            guidance indicator, not a medical assessment.
          </p>

        </section>


        {/* Suggestions */}
        <section className="suggestions-section">

          <div className="suggestions-header">

            <div>
              <h2>💡 Your Suggestions</h2>

              <p>
                Small changes based on your reported food and activity.
              </p>
            </div>

          </div>


          <div className="suggestions-grid">

            <div className="suggestion-card">

              <div className="suggestion-icon">
                💪
              </div>

              <div>
                <h3>Add a protein source</h3>

                <p>
                  Consider locally available options such as dal, eggs,
                  milk, curd or groundnuts.
                </p>
              </div>

            </div>


            <div className="suggestion-card">

              <div className="suggestion-icon">
                🥬
              </div>

              <div>
                <h3>Increase food variety</h3>

                <p>
                  Add seasonal vegetables or fruits when available.
                </p>
              </div>

            </div>


            <div className="suggestion-card">

              <div className="suggestion-icon">
                💧
              </div>

              <div>
                <h3>Pay attention to hydration</h3>

                <p>
                  Stay hydrated throughout physically active days,
                  especially during outdoor work.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="community-cta">

          <div>
            <h2>Ready for a plan that fits your lifestyle?</h2>

            <p>
              Get food and activity guidance based on what you actually do.
            </p>
          </div>

          <button type="button" onClick={onResults}>
            View My Personalized Plan →
          </button>

        </section>

      </main>

    </div>
  );
}

export default CommunityFoodFitness;