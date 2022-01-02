import React, {useState} from "react";
import "./dashboard.scss";

const Dashboard = (props) => {
  const tabs = ["dashboard", "collection"];
    const [ activeTab, setActiveTab]= useState(tabs[0]);
  
    const handleClick = (t) => setActiveTab(t)
  return (
    <div className="dashboard">
      <div className="tab">
        {tabs.map((t) => (
          <h2
            className={`item ${t === activeTab ? "activeTab" : ""}`}
            key={t}
            onClick={() => handleClick(t)}
          >
            {t}
          </h2>
        ))}
      </div>
      <main className="dashboard-main">
        <div className="filter">n</div>
        <div className="display"></div>
      </main>
    </div>
  );
};

export default Dashboard;
