import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./Applayout";
import Ingredients from "./ingredients/ingredients";
import IngredientChanges from "./ingredients/changes";
import IngredientDetail from "./ingredients/detail";
import Recipes from "./recipes/recipes";
import Products from "./products/products";
import ProductCostBreakdown from "./products/ProductCostBreakdown";
import RecipeDetail from "./recipes/recipe-detail";
import "../style/App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Ingredients");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<AppLayout activeTab={activeTab} setActiveTab={setActiveTab} />}
        >
          <Route
            index
            element={
              activeTab === "Ingredients" ? (
                <Ingredients />
              ) : activeTab === "Recipes" ? (
                <Recipes />
              ) : (
                <Products />
              )
            }
          />
          <Route path="ingredient-changes" element={<IngredientChanges />} />
          <Route path="ingredient/:ingredientId" element={<IngredientDetail />} />
          <Route path="/product/:productId/cost-breakdown" element={<ProductCostBreakdown />} />
          <Route path="recipe/:id" element={<RecipeDetail />} /> {/* Direct route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
