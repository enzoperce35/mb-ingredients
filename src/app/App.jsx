import React, { useState } from "react";
import Ingredients from "./ingredients/ingredients";
import Recipes from "./recipes/recipes";
import Products from "./products/products";
import "../style/App.css"; // Main app styles

function App() {
  const [activeTab, setActiveTab] = useState("Ingredients");

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
        <div className="active-indicator" style={{ left: `${["Ingredients", "Recipes", "Products"].indexOf(activeTab) * 33.33}%` }} />
      </div>
      <div className="tab-content">
        {renderTab()}
      </div>
    </div>
  );
}

export default App;
