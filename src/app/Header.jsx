import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Header({ activeTab }) {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;
  const isOnMain = path === "/";
  const isOnChanges = path === "/ingredient-changes";
  const isOnDetail = path.startsWith("/ingredient/");

  // Determine the title based on route or activeTab
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

  // Hide arrows if on Recipes, Products tabs, or detail view
  const hideArrows = activeTab === "Recipes" || activeTab === "Products" || isOnDetail;

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

export default Header;
