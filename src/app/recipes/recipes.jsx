import React from "react";
import { Link } from "react-router-dom";
import { recipes } from "./all-recipes";

export default function Recipes() {
  const filteredRecipes = recipes.filter(recipe => recipe.type === 'f');

  return (
    <div className="recipes-container">
      {filteredRecipes.map(({ id, name, quantity, unit, prepTime }) => (
        <Link to={`/recipe/${id}`} key={id} className="recipe-card-link">
          <div className="recipe-card">
            <h2>{name}</h2>
            <p><strong>Quantity:</strong> {quantity} {unit}</p>
            {prepTime && <p><strong>Prep Time:</strong> {prepTime}</p>}
          </div>
        </Link>
      ))}
    </div>
  );
}
