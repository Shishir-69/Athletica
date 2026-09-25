import React from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import WelcomeBanner from "../components/Welcomebanner";
import StatCards from "../components/Statcards";
import WorkoutCard from "../components/Workoutcards";
import QuickActions from "../components/Quickaction";

function StudentDashboard() {

  return (

    <div className="dashboard">

      {/* LEFT SIDEBAR */}

      <Sidebar />


      {/* MAIN AREA */}

      <main className="main">

        <Topbar />


        <div className="dashboard-content">

          <WelcomeBanner />


          <StatCards />


          <div className="lower-grid">

            <WorkoutCard />

            <QuickActions />

          </div>

        </div>

      </main>

    </div>

  );
}

export default StudentDashboard;