import React from "react";

import {
  Clock,
  Activity
} from "lucide-react";

function WorkoutCard() {
  return (
    <div className="workout-section">

      <div className="section-heading">

        <h2>
          Today's Workout
        </h2>

      </div>


      <div className="workout-card">

        <div className="workout-image">
          🏃‍♂️
        </div>


        <div className="workout-info">

          <h3>
            Full Body HIIT
          </h3>


          <div className="workout-meta">

            <span>
              <Clock size={14} />
              30 min
            </span>

            <span>
              <Activity size={14} />
              Moderate
            </span>

          </div>


          <p>
            A quick and effective workout to boost
            your strength and endurance.
          </p>

        </div>


        <button className="start-button">
          Start Workout
        </button>

      </div>

    </div>
  );
}

export default WorkoutCard;