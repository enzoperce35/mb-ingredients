import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ingredients } from "../ingredients/ingredient-list";
import { recipes } from "./all-recipes";
import { getRecipeCost, getIngredientCost } from "../utils/costCalculations";

const IngredientRow = ({ name, cost, quantity, unit, className }) => (
  <div className={`ingredient-row ${className ?? ""}`}>
    <div className="col name">{name}</div>
    <div className="col quantity">{parseFloat(quantity) % 1 === 0 ? parseInt(quantity) : parseFloat(quantity).toFixed(2)} {unit}</div>
    <div className="col cost">₱{cost.toFixed(2)}</div>
  </div>
);

const ExtraRecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) return <div className="not-found">Recipe not found</div>;

  const renderIngredient = (ing, path = "", level = 0, parentMultiplier = 1) => {
    const key = `${path}-${ing.ingId}`;

    if (ing.recipe) {
      const nestedRecipe = recipes.find(r => r.id === ing.ingId);
      if (!nestedRecipe) return <div key={key} className="error">Recipe not found</div>;

      const recipeQty = nestedRecipe.quantity ?? 1;
      const multiplier = (ing.quantity / recipeQty) * parentMultiplier;
      const cost = getRecipeCost(ing.ingId, ing.quantity, ing.unit);
      const shouldNest = !ing.noNest;

      if (level === 0 && !shouldNest) {
        return (
          <IngredientRow
            key={key}
            className="recipe-ingredient"
            name={nestedRecipe.name}
            cost={cost}
            quantity={ing.alterQuantity ?? ing.quantity}
            unit={ing.alterUnit ?? ing.unit}
          />
        );
      }

      if (level === 0) {
        return (
          <div key={key}>
            {nestedRecipe.ingredients.map((subIng, i) =>
              renderIngredient(subIng, `${key}-sub${i}`, level + 1, multiplier)
            )}
          </div>
        );
      }

      return (
        <div key={key}>
          <IngredientRow
            className="recipe-ingredient"
            name={nestedRecipe.name}
            cost={cost}
            quantity={ing.alterQuantity ?? ing.quantity}
            unit={ing.alterUnit ?? ing.unit}
          />
          {shouldNest &&
            nestedRecipe.ingredients.map((subIng, i) =>
              renderIngredient(subIng, `${key}-sub${i}`, level + 1, multiplier)
            )}
        </div>
      );
    } else {
      const ingredient = ingredients.find(i => i.id === ing.ingId);
      if (!ingredient) return <div key={key} className="error">Ingredient not found</div>;

      const scaledQty = ing.quantity * parentMultiplier;
      const cost = getIngredientCost(ing.ingId, scaledQty, ing.unit);

      return (
        <IngredientRow
          key={key}
          name={ingredient.name}
          cost={cost}
          quantity={((ing.alterQuantity ?? ing.quantity) * parentMultiplier).toFixed(2)}
          unit={ing.alterUnit ?? ing.unit}
        />
      );
    }
  };

  const totalCost = recipe.ingredients.reduce((sum, ing) => {
    return sum + (ing.recipe
      ? getRecipeCost(ing.ingId, ing.quantity, ing.unit)
      : getIngredientCost(ing.ingId, ing.quantity, ing.unit));
  }, 0);

  return (
    <div className="product-cost-breakdown">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <h2><em>{recipe.name} ({recipe.quantity} {recipe.unit})</em></h2>
      <div className="ingredient-table">
        <div className="ingredient-header">
          <div className="col name">Name</div>
          <div className="col quantity">Quantity</div>
          <div className="col cost">Cost</div>
        </div>
        <div className="ingredients-list">
          {recipe.ingredients.map((ing, i) => renderIngredient(ing, `root-${i}`, 0))}
        </div>
      </div>
      <div className="total-cost">
        Total Cost: <span className="cost">₱{totalCost.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ExtraRecipeDetail;
