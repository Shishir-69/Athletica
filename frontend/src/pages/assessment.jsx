/* eslint-disable react/prop-types */
import { useState } from "react";
import "./assessment.css";

export default function FitnessAssessment({ onDashboard, onResults, onWorkoutPlan, onNutrition, onWellness, onProgress, onTalent, onGamification, onLeaderboard }) {
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
    gender: "",
    activityLevel: "Moderate",

    pushUps: "",
    squats: "",
    plankDuration: "",
    walkRunTime: "",
    flexibility: "",

    sleepHours: "",
    manualWork: "",

    fitnessGoal: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [demoScore, setDemoScore] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleManualWork = (value) => {
    setFormData((prev) => ({
      ...prev,
      manualWork: value,
    }));
  };

  const calculateDemoScore = () => {
    let score = 50;

    // Push-ups
    if (formData.pushUps) {
      score += Math.min(Number(formData.pushUps) / 2, 10);
    }

    // Squats
    if (formData.squats) {
      score += Math.min(Number(formData.squats) / 5, 8);
    }

    // Plank
    if (formData.plankDuration) {
      score += Math.min(Number(formData.plankDuration) / 20, 8);
    }

    // Flexibility
    if (formData.flexibility) {
      score += Math.min(Number(formData.flexibility) / 3, 7);
    }

    // Sleep
    if (formData.sleepHours) {
      const sleep = Number(formData.sleepHours);

      if (sleep >= 7 && sleep <= 9) {
        score += 8;
      } else if (sleep >= 6) {
        score += 4;
      }
    }

    // Manual work
    if (formData.manualWork === "yes") {
      score += 4;
    }

    // Walk / run time
    if (formData.walkRunTime) {
      const time = Number(formData.walkRunTime);

      if (time <= 6) {
        score += 10;
      } else if (time <= 8) {
        score += 7;
      } else if (time <= 10) {
        score += 4;
      }
    }

    return Math.min(Math.round(score), 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const score = calculateDemoScore();

    setDemoScore(score);
    setSubmitted(true);
    onResults();

    console.log("Fitness Assessment Data:", formData);
  };

  return (
    <div className="assessment-page">

      {/* ================= SIDEBAR ================= */}
      <aside className="assessment-sidebar">

        <div className="assessment-logo">
          <div className="logo-symbol">A</div>

          <div>
            <h2>ATHLETICA</h2>
            <span>Fitness & Wellness</span>
          </div>
        </div>

        <nav className="assessment-nav">

          <button type="button" onClick={onDashboard} className="nav-item">
            <span className="nav-icon">⌂</span>
            <span>Dashboard</span>
          </button>

          <button type="button" className="nav-item active">
            <span className="nav-icon">▣</span>
            <span>Assessment</span>
          </button>

          <button type="button" onClick={onWorkoutPlan} className="nav-item">
            <span className="nav-icon">▤</span>
            <span>Workout Plan</span>
          </button>

          <button type="button" onClick={onNutrition} className="nav-item">
            <span className="nav-icon">◉</span>
            <span>Nutrition</span>
          </button>

          <button type="button" onClick={onWellness} className="nav-item">
            <span className="nav-icon">♡</span>
            <span>Wellness</span>
          </button>

          <button type="button" onClick={onProgress} className="nav-item">
            <span className="nav-icon">▥</span>
            <span>Progress</span>
          </button>

          <button type="button" onClick={onTalent} className="nav-item">
            <span className="nav-icon">♙</span>
            <span>Talent Discovery</span>
          </button>

          <button type="button" onClick={onGamification} className="nav-item">
            <span className="nav-icon">◎</span>
            <span>Gamification</span>
          </button>

          <button type="button" onClick={onLeaderboard} className="nav-item">
            <span className="nav-icon">♛</span>
            <span>Leaderboard</span>
          </button>

        </nav>

        <div className="sidebar-language">
          <span>◉</span>
          English
          <span className="language-arrow">⌄</span>
        </div>
      </aside>


      {/* ================= MAIN AREA ================= */}
      <main className="assessment-main">

        {/* TOP BAR */}
        <header className="assessment-topbar">

          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search..."
              aria-label="Search"
            />
          </div>

          <div className="topbar-actions">
            <button className="notification-button">
              ♧
            </button>

            <div className="profile-circle">
              A
            </div>
          </div>

        </header>


        {/* ================= CONTENT ================= */}
        <section className="assessment-content">

          {/* HERO */}
          <div className="assessment-hero">

            <div className="hero-text">
              <h1>Fitness Assessment</h1>

              <p>
                Take a quick fitness test to understand your current
                fitness level and get personalized recommendations.
              </p>
            </div>

            <div className="hero-illustration">
              <div className="heart-icon">♥</div>

              <div className="person">
                🧑
              </div>

              <div className="plant plant-one">🌿</div>
              <div className="plant plant-two">🍃</div>
            </div>

          </div>


          {/* ================= STEP INDICATOR ================= */}
          <div className="step-container">

            <div className="step active">
              <div className="step-number">1</div>

              <div>
                <strong>Basic Details</strong>
              </div>
            </div>

            <div className="step-line"></div>

            <div className="step">
              <div className="step-number">2</div>

              <div>
                <strong>Fitness Tests</strong>
              </div>
            </div>

            <div className="step-line"></div>

            <div className="step">
              <div className="step-number">3</div>

              <div>
                <strong>Results</strong>
              </div>
            </div>

          </div>


          {/* ================= FORM ================= */}
          <form
            className="assessment-form"
            onSubmit={handleSubmit}
          >

            {/* BASIC DETAILS */}
            <section className="form-section">

              <div className="section-heading">
                <h2>Basic Details</h2>

                <p>
                  Tell us a little about yourself.
                </p>
              </div>


              <div className="form-grid">

                {/* AGE */}
                <div className="form-group">
                  <label htmlFor="age">
                    Age
                  </label>

                  <input
                    id="age"
                    name="age"
                    type="number"
                    min="5"
                    max="100"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </div>


                {/* HEIGHT */}
                <div className="form-group">
                  <label htmlFor="height">
                    Height (cm)
                  </label>

                  <input
                    id="height"
                    name="height"
                    type="number"
                    min="50"
                    max="250"
                    placeholder="e.g. 165"
                    value={formData.height}
                    onChange={handleChange}
                    required
                  />
                </div>


                {/* WEIGHT */}
                <div className="form-group">
                  <label htmlFor="weight">
                    Weight (kg)
                  </label>

                  <input
                    id="weight"
                    name="weight"
                    type="number"
                    min="10"
                    max="300"
                    placeholder="e.g. 55"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>


              {/* GENDER */}
              <div className="form-group gender-group">

                <label>
                  Gender
                </label>

                <div className="radio-options">

                  <label className="radio-option">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                    />

                    <span>Male</span>
                  </label>


                  <label className="radio-option">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                    />

                    <span>Female</span>
                  </label>


                  <label className="radio-option">
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      checked={formData.gender === "Other"}
                      onChange={handleChange}
                    />

                    <span>Other</span>
                  </label>

                </div>

              </div>


              {/* ACTIVITY LEVEL */}
              <div className="form-group">

                <label htmlFor="activityLevel">
                  Activity Level
                </label>

                <select
                  id="activityLevel"
                  name="activityLevel"
                  value={formData.activityLevel}
                  onChange={handleChange}
                >
                  <option value="Low">
                    Low - Little physical activity
                  </option>

                  <option value="Moderate">
                    Moderate - Regular physical activity
                  </option>

                  <option value="High">
                    High - Very active
                  </option>
                </select>

              </div>

            </section>


            {/* ================= FITNESS TESTS ================= */}
            <section className="form-section">

              <div className="section-heading">
                <h2>Fitness Tests</h2>

                <p>
                  Enter your recent physical activity results.
                </p>
              </div>


              <div className="form-grid">

                {/* PUSH UPS */}
                <div className="form-group">
                  <label htmlFor="pushUps">
                    Push-ups
                  </label>

                  <div className="input-with-unit">

                    <input
                      id="pushUps"
                      name="pushUps"
                      type="number"
                      min="0"
                      max="500"
                      placeholder="e.g. 15"
                      value={formData.pushUps}
                      onChange={handleChange}
                    />

                    <span>reps</span>

                  </div>

                  <small>
                    Number of continuous push-ups you can perform.
                  </small>
                </div>


                {/* SQUATS */}
                <div className="form-group">
                  <label htmlFor="squats">
                    Squats
                  </label>

                  <div className="input-with-unit">

                    <input
                      id="squats"
                      name="squats"
                      type="number"
                      min="0"
                      max="500"
                      placeholder="e.g. 25"
                      value={formData.squats}
                      onChange={handleChange}
                    />

                    <span>reps</span>

                  </div>

                </div>


                {/* PLANK */}
                <div className="form-group">
                  <label htmlFor="plankDuration">
                    Plank Duration
                  </label>

                  <div className="input-with-unit">

                    <input
                      id="plankDuration"
                      name="plankDuration"
                      type="number"
                      min="0"
                      max="3600"
                      placeholder="e.g. 45"
                      value={formData.plankDuration}
                      onChange={handleChange}
                    />

                    <span>sec</span>

                  </div>

                  <small>
                    Maximum time you can comfortably hold a plank.
                  </small>
                </div>


                {/* WALK / RUN */}
                <div className="form-group">
                  <label htmlFor="walkRunTime">
                    1 km Walk / Run Time
                  </label>

                  <div className="input-with-unit">

                    <input
                      id="walkRunTime"
                      name="walkRunTime"
                      type="number"
                      min="1"
                      max="120"
                      step="0.1"
                      placeholder="e.g. 7.5"
                      value={formData.walkRunTime}
                      onChange={handleChange}
                    />

                    <span>min</span>

                  </div>

                  <small>
                    Time taken to walk or run 1 kilometre.
                  </small>
                </div>


                {/* FLEXIBILITY */}
                <div className="form-group">
                  <label htmlFor="flexibility">
                    Flexibility
                  </label>

                  <div className="input-with-unit">

                    <input
                      id="flexibility"
                      name="flexibility"
                      type="number"
                      min="0"
                      max="100"
                      step="0.1"
                      placeholder="e.g. 18"
                      value={formData.flexibility}
                      onChange={handleChange}
                    />

                    <span>cm</span>

                  </div>

                  <small>
                    Enter your flexibility test result.
                  </small>
                </div>

              </div>

            </section>


            {/* ================= LIFESTYLE ================= */}
            <section className="form-section">

              <div className="section-heading">
                <h2>Lifestyle & Daily Activity</h2>

                <p>
                  These details help us understand your daily routine.
                </p>
              </div>


              <div className="lifestyle-grid">

                {/* SLEEP */}
                <div className="form-group">

                  <label htmlFor="sleepHours">
                    Sleep Hours
                  </label>

                  <div className="input-with-unit">

                    <input
                      id="sleepHours"
                      name="sleepHours"
                      type="number"
                      min="0"
                      max="24"
                      step="0.5"
                      placeholder="e.g. 7.5"
                      value={formData.sleepHours}
                      onChange={handleChange}
                    />

                    <span>hours</span>

                  </div>

                </div>


                {/* MANUAL WORK */}
                <div className="form-group manual-work-group">

                  <label>
                    Do you regularly do manual work?
                  </label>

                  <div className="yes-no-buttons">

                    <button
                      type="button"
                      className={
                        formData.manualWork === "yes"
                          ? "choice-button selected"
                          : "choice-button"
                      }
                      onClick={() => handleManualWork("yes")}
                      aria-pressed={formData.manualWork === "yes"}
                    >
                      ✓ Yes
                    </button>


                    <button
                      type="button"
                      className={
                        formData.manualWork === "no"
                          ? "choice-button selected"
                          : "choice-button"
                      }
                      onClick={() => handleManualWork("no")}
                      aria-pressed={formData.manualWork === "no"}
                    >
                      No
                    </button>

                  </div>

                </div>

              </div>

            </section>


            {/* ================= FITNESS GOAL ================= */}
            <section className="form-section">

              <div className="section-heading">
                <h2>Fitness Goal</h2>

                <p>
                  What would you like to improve?
                </p>
              </div>


              <div className="form-group">

                <label htmlFor="fitnessGoal">
                  Select your primary goal
                </label>

                <select
                  id="fitnessGoal"
                  name="fitnessGoal"
                  value={formData.fitnessGoal}
                  onChange={handleChange}
                >

                  <option value="">
                    Select a goal
                  </option>

                  <option value="General Fitness">
                    General Fitness
                  </option>

                  <option value="Strength">
                    Build Strength
                  </option>

                  <option value="Endurance">
                    Improve Endurance
                  </option>

                  <option value="Flexibility">
                    Improve Flexibility
                  </option>

                  <option value="Sports Performance">
                    Sports Performance
                  </option>

                  <option value="Weight Management">
                    Weight Management
                  </option>

                </select>

              </div>

            </section>


            {/* ================= RESULT MESSAGE ================= */}
            {submitted && (
              <div className="assessment-result">

                <div className="result-icon">
                  ✓
                </div>

                <div>
                  <h3>Assessment Ready</h3>

                  <p>
                    Your information has been collected successfully.
                  </p>

                  <strong>
                    Demo Fitness Score: {demoScore}/100
                  </strong>

                  <small>
                    This is a frontend demo score. Your backend
                    assessment engine can replace this calculation.
                  </small>
                  <button type="button" onClick={onResults}>
                    View Results
                  </button>
                </div>

              </div>
            )}


            {/* ================= BOTTOM ACTION ================= */}
            <div className="form-footer">

              <div className="privacy-note">
                <span>🔒</span>

                <p>
                  Your information is private and will only be used
                  to personalize your fitness recommendations.
                </p>
              </div>


              <button
                type="submit"
                className="next-button"
              >
                Calculate Fitness Score
                <span>→</span>
              </button>

            </div>

          </form>

        </section>

      </main>

    </div>
  );
}