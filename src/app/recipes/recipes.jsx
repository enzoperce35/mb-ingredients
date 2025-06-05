import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { recipes } from "../recipes/all-recipes";
import { getProductCost } from "../utils/costCalculations";

export default function Recipes() {
  const foodRecipes = recipes.filter(recipe => recipe.type === 'f');
  const extraRecipes = recipes.filter(recipe => recipe.type === 'g');
  const navigate = useNavigate();

  return (
    <div>
      {/* Food Recipe Cards */}
      <div className="recipes-container">
        {foodRecipes.map(({ id, name, quantity, unit, prepTime }) => (
          <Link to={`/recipe/${id}`} key={id} className="recipe-card-link">
            <div className="recipe-card">
              <h2>{name}</h2>
              <p><strong>{quantity} {unit}</strong> </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Extra Recipes Table */}
      <div className="recipes-table-container">
        <h3>Extra Recipes</h3>
        <table className="recipes-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {extraRecipes.map((recipe) => {
              const cost = getProductCost(recipe);
              return (
                <tr
                  key={recipe.id}
                  className="clickable-row"
                  onClick={() => navigate(`/recipe/${recipe.id}`)}
                >
                  <td>{recipe.name}</td>
                  <td>{recipe.quantity} {recipe.unit}</td>
                  <td>{cost ? `₱${cost.toFixed(2)}` : '—'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
