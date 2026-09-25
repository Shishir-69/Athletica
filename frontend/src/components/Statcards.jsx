import React from "react";

import {
  Award,
  Star,
  Flame
} from "lucide-react";

function StatCards() {
  return (
    <section className="stats-container">

      {/* FITNESS SCORE */}

      <div className="stat-card fitness-card">

        <div className="stat-heading">

          <Award size={22} />

          <span>
            Fitness Score
          </span>

        </div>


        <div className="fitness-content">

          <div className="score-ring">

            <div className="score-inner">

              <strong>
                82
              </strong>

              <small>
                /100
              </small>

              <span>
                Good
              </span>

            </div>

          </div>


          <div className="score-change">

            <strong>
              ↑ 8%
            </strong>

            <span>
              vs last month
            </span>

          </div>

        </div>

      </div>


      {/* XP */}

      <div className="stat-card xp-card">

        <div className="stat-heading purple">

          <Star size={21} />

          <span>
            XP
          </span>

        </div>


        <h2>
          1,250
        </h2>

        <p>
          Level 3
        </p>

        <div className="xp-today">
          ✦ +200 today
        </div>

      </div>


      {/* STREAK */}

      <div className="stat-card streak-card">

        <div className="stat-heading orange">

          <Flame size={22} />

          <span>
            Streak
          </span>

        </div>


        <h2>
          7 Days
        </h2>

        <p>
          🔥 Keep it up!
        </p>

      </div>

    </section>
  );
}

export default StatCards;