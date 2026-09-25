/* eslint-disable react/prop-types */
import "./CommunityFoodResults.css";

const FoodFitnessResult = ({ onWorkoutPlan, onNutrition, onWellness, onProgress, onGamification, onLeaderboard, onCommunityFoodTest }) => {

  // Data can later come from the backend.
  // For now, we use data passed from the previous screen
  // or fallback demo data.
  const result = {
    score: 82,
    workType: "Farming / Agriculture",
    activeHours: "4–6 hours",
    foodCount: 7,
  };

  const getStatus = () => {
    if (result.score >= 80) return "Well Supported";
    if (result.score >= 65) return "Needs Improvement";
    return "Needs More Support";
  };

  const getMessage = () => {
    if (result.score >= 80) {
      return "Your reported food pattern appears reasonably aligned with the activity you do every day.";
    }

    if (result.score >= 65) {
      return "Your food provides some support for your daily activity, but a few areas could be improved.";
    }

    return "Your reported activity may need more nutritional support. Improving food variety and hydration can help.";
  };

  return (
    <div className="food-result-page">

      {/* SIDEBAR */}
      <aside className="food-result-sidebar">

        <div className="food-result-logo">
          <div className="logo-mark">A</div>
          <span>ATHLETICA</span>
        </div>

        <nav className="food-result-nav">

          <button type="button" onClick={onWorkoutPlan} className="food-result-nav-item">
            <span>⌂</span>
            Dashboard
          </button>

          <button type="button" onClick={onWorkoutPlan} className="food-result-nav-item">
            <span>🏃</span>
            Workout Plan
          </button>

          <button type="button" onClick={onNutrition} className="food-result-nav-item">
            <span>🥗</span>
            Nutrition
          </button>

          <button type="button" onClick={onWellness} className="food-result-nav-item">
            <span>♡</span>
            Wellness
          </button>

          <button type="button" onClick={onProgress} className="food-result-nav-item">
            <span>↗</span>
            Progress
          </button>

          <button type="button" onClick={onGamification} className="food-result-nav-item">
            <span>🏆</span>
            Gamification
          </button>

          <button type="button" onClick={onLeaderboard} className="food-result-nav-item">
            <span>☷</span>
            Leaderboard
          </button>

          <button type="button" onClick={onCommunityFoodTest} className="food-result-nav-item active">
            <span>🍚</span>
            Food & Fitness
          </button>

        </nav>

        <div className="food-result-offline">
          <span className="offline-dot"></span>
          Offline Ready
        </div>

      </aside>


      {/* MAIN CONTENT */}
      <main className="food-result-main">

        {/* TOP BAR */}
        <header className="food-result-header">

          <div className="food-result-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search..."
            />
          </div>

          <div className="food-result-profile">
            <div className="profile-avatar">AS</div>

            <div>
              <strong>Ananya S.</strong>
              <small>Student</small>
            </div>
          </div>

        </header>


        {/* PAGE HEADING */}
        <section className="food-result-heading">

          <div>
            <h1>Your Food–Work Fitness Result</h1>

            <p>
              See how your reported food pattern supports the activity
              you do every day.
            </p>
          </div>

          <button type="button" onClick={onCommunityFoodTest} className="edit-result-btn">
            ← Edit Details
          </button>

        </section>


        {/* SCORE CARD */}
        <section className="result-score-card">

          <div className="score-left">

            <div className="score-label">
              FOOD–WORK FIT SCORE
            </div>

            <div className="score-number">
              {result.score}
              <span>/100</span>
            </div>

            <div className="score-status">
              <span>✓</span>
              {getStatus()}
            </div>

          </div>


          <div className="score-explanation">

            <h2>
              Does your food fuel your work?
            </h2>

            <p>
              {getMessage()}
            </p>

            <div className="activity-summary">

              <div>
                <span>Daily Activity</span>
                <strong>{result.workType}</strong>
              </div>

              <div>
                <span>Active Time</span>
                <strong>{result.activeHours}</strong>
              </div>

              <div>
                <span>Food Groups</span>
                <strong>{result.foodCount} selected</strong>
              </div>

            </div>

          </div>

        </section>


        {/* SUPPORT CARDS */}
        <section className="support-section">

          <div className="section-title">
            <h2>Your Food Support</h2>
            <p>
              A simple view of the areas that contribute to your result.
            </p>
          </div>


          <div className="support-grid">

            <div className="support-card">

              <div className="support-icon energy">
                ⚡
              </div>

              <div className="support-content">
                <div className="support-top">
                  <h3>Energy Support</h3>
                  <span>Good</span>
                </div>

                <div className="support-bar">
                  <div
                    className="support-fill"
                    style={{ width: "84%" }}
                  ></div>
                </div>

                <p>
                  Your reported food choices provide a reasonable
                  base for your daily activity.
                </p>
              </div>

            </div>


            <div className="support-card">

              <div className="support-icon protein">
                💪
              </div>

              <div className="support-content">
                <div className="support-top">
                  <h3>Protein Sources</h3>
                  <span>Moderate</span>
                </div>

                <div className="support-bar">
                  <div
                    className="support-fill"
                    style={{ width: "68%" }}
                  ></div>
                </div>

                <p>
                  Dal, eggs, milk and groundnuts can help add
                  protein-rich options.
                </p>
              </div>

            </div>


            <div className="support-card">

              <div className="support-icon variety">
                🥗
              </div>

              <div className="support-content">
                <div className="support-top">
                  <h3>Food Variety</h3>
                  <span>Good</span>
                </div>

                <div className="support-bar">
                  <div
                    className="support-fill"
                    style={{ width: "82%" }}
                  ></div>
                </div>

                <p>
                  Your selected food groups provide a good mix
                  of everyday food choices.
                </p>
              </div>

            </div>


            <div className="support-card">

              <div className="support-icon hydration">
                💧
              </div>

              <div className="support-content">
                <div className="support-top">
                  <h3>Hydration</h3>
                  <span>Needs Attention</span>
                </div>

                <div className="support-bar">
                  <div
                    className="support-fill"
                    style={{ width: "52%" }}
                  ></div>
                </div>

                <p>
                  Remember to drink water regularly, especially
                  during physically active work.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* WHAT IS GOING WELL */}
        <section className="result-columns">

          <div className="result-panel">

            <div className="panel-heading">
              <div className="panel-icon good">
                ✓
              </div>

              <div>
                <h2>What you&apos;re doing well</h2>
                <p>Positive areas from your responses.</p>
              </div>
            </div>

            <ul className="result-list">

              <li>
                <span>✓</span>
                You reported a physically active daily routine.
              </li>

              <li>
                <span>✓</span>
                Your food choices include multiple food groups.
              </li>

              <li>
                <span>✓</span>
                Traditional foods such as rice, ragi and dal can
                be part of your daily food pattern.
              </li>

            </ul>

          </div>


          {/* IMPROVEMENT */}
          <div className="result-panel">

            <div className="panel-heading">

              <div className="panel-icon improve">
                ↑
              </div>

              <div>
                <h2>Areas to improve</h2>
                <p>Simple changes you can consider.</p>
              </div>

            </div>

            <ul className="result-list">

              <li>
                <span>+</span>
                Include a protein-rich food source regularly.
              </li>

              <li>
                <span>+</span>
                Add more vegetables or fruits when available.
              </li>

              <li>
                <span>+</span>
                Pay attention to hydration during active work.
              </li>

            </ul>

          </div>

        </section>


        {/* LOCAL FOOD SUGGESTIONS */}
        <section className="local-food-section">

          <div className="local-food-heading">

            <div>
              <span className="small-label">
                COMMUNITY FRIENDLY
              </span>

              <h2>Simple Food Ideas</h2>

              <p>
                Suggestions using familiar and accessible food
                choices. No expensive supplements required.
              </p>
            </div>

          </div>


          <div className="local-food-grid">

            <div className="local-food-card">
              <span>🌾</span>
              <div>
                <strong>Ragi / Millet</strong>
                <p>Can be included as part of a balanced meal.</p>
              </div>
            </div>

            <div className="local-food-card">
              <span>🫘</span>
              <div>
                <strong>Dal / Pulses</strong>
                <p>A familiar source of plant-based protein.</p>
              </div>
            </div>

            <div className="local-food-card">
              <span>🥜</span>
              <div>
                <strong>Groundnuts</strong>
                <p>A simple local food option to add variety.</p>
              </div>
            </div>

            <div className="local-food-card">
              <span>🥚</span>
              <div>
                <strong>Eggs</strong>
                <p>An optional protein-rich food choice.</p>
              </div>
            </div>

          </div>

        </section>


        {/* DISCLAIMER */}
        <div className="result-note">

          <span>ⓘ</span>

          <p>
            This Food–Work Fit Score is a demonstration feature based
            on the information you entered. It is not a medical
            diagnosis or a clinically validated nutrition score.
          </p>

        </div>


        {/* CTA */}
        <section className="result-cta">

          <div>
            <h2>Ready for your next step?</h2>

            <p>
              Use your result to explore an activity plan designed
              around your routine.
            </p>
          </div>

          <button type="button" onClick={onWorkoutPlan} className="result-cta-btn">
            View My Activity Plan →
          </button>

        </section>

      </main>

    </div>
  );
};

export default FoodFitnessResult;