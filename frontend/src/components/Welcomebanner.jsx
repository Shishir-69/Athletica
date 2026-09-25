import React from "react";

function WelcomeBanner() {
  return (
    <section className="welcome-banner">

      <div className="welcome-text">

        <h1>
          Good morning, Ananya! <span>☀️</span>
        </h1>

        <p>
          Small steps today, big changes tomorrow.
        </p>

      </div>


      <div className="welcome-art">

        <div className="mountain mountain-one"></div>

        <div className="mountain mountain-two"></div>

        <div className="sun"></div>

        <div className="runner">
          🏃
        </div>

        <div className="welcome-message">
          Stay consistent,
          <br />
          keep growing!
        </div>

      </div>

    </section>
  );
}

export default WelcomeBanner;