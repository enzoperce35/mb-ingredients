import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";

function AppLayout({ activeTab, setActiveTab }) {
  const navigate = useNavigate();

  return (
    <div className="App">
      {/* Always show tabs */}
      <div className="tabs-container">
        <div className="tab-buttons">
          {["Ingredients", "Recipes", "Products"].map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => {
                setActiveTab(tab);
                navigate("/"); // Navigate to main route when tab changes
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div
          className="active-indicator"
          style={{
            left: `${["Ingredients", "Recipes", "Products"].indexOf(activeTab) * 33.33}%`,
          }}
        />
      </div>

      {/* Show Header only on Ingredients tab */}
      {activeTab === "Ingredients" && <Header activeTab={activeTab} />}

      <div className="tab-content">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
