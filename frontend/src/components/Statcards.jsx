import React from "react";

function StatCard({ icon, title, value, subtitle, className = "" }) {
  return (
    <div className={`stat-card ${className}`}>

      <div className="stat-icon">
        {icon}
      </div>

      <div className="stat-content">
        <p>{title}</p>
        <h2>{value}</h2>
        <span>{subtitle}</span>
      </div>

    </div>
  );
}

export default StatCard;