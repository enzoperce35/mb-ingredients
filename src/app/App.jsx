import React, { useState } from "react";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import Ingredients from "./ingredients/ingredients";
import Recipes from "./recipes/recipes";
import Products from "./products/products";
import "../style/App.css";

// Universal Header
function Header({ activeTab }) {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;
  const isOnMain = path === "/";
  const isOnChanges = path === "/ingredient-changes";
  const isOnDetail = path.startsWith("/ingredient/");

  // Determine title based on route or activeTab
  let title = "";
  if (activeTab === "Recipes") {
    title = "Recipe List";
  } else if (activeTab === "Products") {
    title = "All Products";
  } else if (isOnMain) {
    title = "UPDATES";
  } else if (isOnChanges) {
    title = "CHANGES";
  } else if (isOnDetail) {
    title = "Ingredient Details";
  }

  // Hide arrows if tab is Recipes or Products OR on detail view
  const hideArrows = activeTab === "Recipes" || activeTab === "Products" || isOnDetail;

  // Arrow handlers - same logic but won't be triggered when buttons are hidden/disabled
  const handleLeftClick = () => {
    if (isOnChanges) navigate("/");
  };

  const handleRightClick = () => {
    if (isOnMain) navigate("/ingredient-changes");
  };

  return (
    <header className="app-header">
      <button
        className="arrow-button left"
        onClick={handleLeftClick}
        disabled={!isOnChanges || isOnDetail}
        style={{ visibility: hideArrows ? "hidden" : "visible" }}
        aria-label="Go to Ingredient Table"
      >
        ◀
      </button>

      <h1>{title}</h1>

      <button
        className="arrow-button right"
        onClick={handleRightClick}
        disabled={!isOnMain || isOnDetail}
        style={{ visibility: hideArrows ? "hidden" : "visible" }}
        aria-label="Go to Ingredient Changes"
      >
        ▶
      </button>
    </header>
  );
}

// Wrapper component to use Router hooks with Header
function AppContent({ activeTab, setActiveTab }) {
  const renderTab = () => {
    switch (activeTab) {
      case "Ingredients":
        return <Ingredients />;
      case "Recipes":
        return <Recipes />;
      case "Products":
        return <Products />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="tabs-container">
        <div className="tab-buttons">
          {["Ingredients", "Recipes", "Products"].map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
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
      
      <Header activeTab={activeTab} />
      
      <div className="tab-content">{renderTab()}</div>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState("Ingredients");

  return (
    <BrowserRouter>
      <AppContent activeTab={activeTab} setActiveTab={setActiveTab} />
    </BrowserRouter>
  );
}

export default App;
