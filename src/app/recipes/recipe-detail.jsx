import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { recipes } from "./all-recipes";
import convertToExactKitchenUnit from "../utils/exactkitchenunits";
import { getProductCost } from "../utils/costCalculations";

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showIngredientCosts, setShowIngredientCosts] = useState(false);

  const recipe = recipes.find(r => String(r.id) === String(id));

  if (!recipe) {
    return (
      <div className="recipe-detail-container">
        <h2>Recipe Not Found</h2>
        <button onClick={() => navigate(-1)} className="back-button">Go Back</button>
      </div>
    );
  }

  return (
    <div className="recipe-detail-container">
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>

      <div className="recipe-header">
        <h1 className="recipe-title">{recipe.name}</h1>
        <div className="recipe-info">
          <p className="recipe-quantity">
            <strong>Quantity:</strong> {recipe.quantity} {recipe.unit}
          </p>
          {recipe.prepTime && (
            <p className="recipe-preptime">
              <strong>Prep Time:</strong> {recipe.prepTime}
            </p>
          )}
          <p className="recipe-cost">
            <strong>Cost:</strong> {`₱${getProductCost(recipe).toFixed(2)}`}
          </p>
        </div>
      </div>

      <div className="recipe-content-landscape">
        <section className="ingredients-section">
          <div className="ingredients-title-container">
            <h2>Ingredients</h2>
            <button
              className="ingredient-cost-toggle"
              onClick={() => setShowIngredientCosts(prev => !prev)}
              title={showIngredientCosts ? "Hide Ingredient Costs" : "Show Ingredient Costs"}
            >
              💵
            </button>
          </div>

          <ul className="ingredient-list">
            {recipe.ingredients
              .filter(ingredient => !ingredient.hide || showIngredientCosts)
              .map((ingredient) => {
                const {
                  name,
                  ingId,
                  quantity,
                  unit,
                  alterQuantity,
                  alterUnit,
                } = ingredient;

                const formattedQuantity = alterQuantity && alterUnit
                  ? convertToExactKitchenUnit(alterQuantity, alterUnit)
                  : convertToExactKitchenUnit(quantity, unit);

                const ingredientCost = showIngredientCosts
                  ? getProductCost({ ingredients: [ingredient] })
                  : null;

                return (
                  <li
                    key={ingId}
                    className={`ingredient-item ${ingredient.hide ? "hidden-ingredient" : ""}`}
                  >
                    <span className="ingredient-name">{name}</span>
                    <div className="ingredient-right">
                      <span className="ingredient-amount">{formattedQuantity}</span>
                      {showIngredientCosts && (
                        <span className="ingredient-cost">₱{ingredientCost.toFixed(2)}</span>
                      )}
                    </div>
                  </li>
                );
              })}
          </ul>
        </section>

        {recipe.instructions?.steps && (
          <section className="instructions-section">
            <h2>Instructions</h2>
            <ol>
              {recipe.instructions.steps.map((step, idx) => (
                <li key={idx} className="instruction-step">{step}</li>
              ))}
            </ol>
          </section>
        )}
      </div>
    </div>
  );
}
