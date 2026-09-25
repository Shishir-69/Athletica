import React from "react";

const menuItems = [
  { icon: "⌂", name: "Dashboard" },
  { icon: "◉", name: "Assessment" },
  { icon: "🏃", name: "Workout Plan" },
  { icon: "🍎", name: "Nutrition" },
  { icon: "♥", name: "Wellness" },
  { icon: "↗", name: "Progress" },
  { icon: "★", name: "Talent Discovery" },
  { icon: "🏆", name: "Gamification" },
];

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="brand">
        <div className="brand-logo">A</div>

        <div>
          <h2>ATHLETICA</h2>
          <span>Fitness & Wellness</span>
        </div>
      </div>

      <nav className="sidebar-menu">

        {menuItems.map((item, index) => (
          <div
            key={item.name}
            className={`menu-item ${index === 0 ? "active" : ""}`}
          >
            <span className="menu-icon">{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}

      </nav>

      <div className="sidebar-bottom">
        <span>🌐</span>
        <span>English</span>
      </div>

    </aside>
  );
}

export default Sidebar;