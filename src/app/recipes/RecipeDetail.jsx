import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { recipes } from "./all-recipes";
import convertToExactKitchenUnit from "../utils/exactkitchenunits";

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find(r => r.id == id); // handle string/number mismatch

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

      {/* Header section with title and info side-by-side */}
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
        </div>
      </div>

      <section className="ingredients-section">
        <h2>Ingredients</h2>
        <ul className="ingredient-list">
          {recipe.ingredients.map(({ name, ingId, quantity, unit, alterQuantity, alterUnit }) => (
            <li key={ingId} className="ingredient-item">
              <span className="ingredient-name">{name}</span>
              <span className="ingredient-amount">
                {alterQuantity && alterUnit ? `${convertToExactKitchenUnit(alterQuantity, alterUnit)}` : `${convertToExactKitchenUnit(quantity, unit)}`}
              </span>
            </li>
          ))}
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
  );
}
