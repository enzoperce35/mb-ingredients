import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./all-products";
import { ingredients } from "../ingredients/ingredient-list";
import { recipes } from "../recipes/all-recipes";
import {
  getRecipeCost,
  getIngredientCost,
  getProductCost
} from "../utils/costCalculations";
import {
  convertToBaseUnit,
  convertToSmallerUnit
} from "../utils/unitConversion";

const IngredientRow = ({ name, cost, quantity, unit, className }) => (
  <div className={`ingredient-row ${className ?? ""}`}>
    <div className="col name">{name}</div>
    <div className="col quantity">
      {parseFloat(quantity) % 1 === 0
        ? parseInt(quantity)
        : parseFloat(quantity).toFixed(2)}{" "}
      {unit}
    </div>
    <div className="col cost">₱{cost.toFixed(2)}</div>
  </div>
);

const ProductCostBreakdown = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === productId);

  if (!product) return <div className="not-found">Product not found</div>;

  const toTitleCase = (str) =>
    str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());

  const renderIngredient = (ing, path = "", level = 0, parentMultiplier = 1) => {
    const key = `${path}-${ing.ingId}`;

    if (ing.recipe) {
      const recipe = recipes.find((r) => r.id === ing.ingId);
      if (!recipe) return <div key={key} className="error">Recipe not found</div>;

      const recipeQty = recipe.quantity ?? 1;
      const multiplier = (ing.quantity / recipeQty) * parentMultiplier;
      const cost = getRecipeCost(ing.ingId, ing.quantity, ing.unit);
      const shouldNest = !ing.noNest;

      return (
        <div key={key}>
          <IngredientRow
            className="recipe-ingredient"
            name={recipe.name}
            cost={cost}
            quantity={ing.alterQuantity ?? ing.quantity}
            unit={ing.alterUnit ?? ing.unit}
          />
          {shouldNest && level < 1 &&
            recipe.ingredients.map((subIng, i) =>
              renderIngredient(subIng, `${key}-sub${i}`, level + 1, multiplier)
            )}
        </div>
      );
    } else {
      const ingredient = ingredients.find((i) => i.id === ing.ingId);
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

  const formatAmount = (val) =>
    Number(val).toFixed(2).replace(/\.00$/, "");

  const totalCost = product.ingredients.reduce((sum, ing) => {
    return sum + (ing.recipe
      ? getRecipeCost(ing.ingId, ing.quantity, ing.unit)
      : getIngredientCost(ing.ingId, ing.quantity, ing.unit));
  }, 0);

  const updatedCost = getProductCost(product, true);
  const profit = product.price - updatedCost;
  const diff = totalCost - updatedCost;
  const diffClass = diff > 0 ? "diff-negative" : diff < 0 ? "diff-positive" : "";

  const flattenRawIngredients = (ingList, parentMultiplier = 1, path = []) => {
    const flat = [];

    for (const ing of ingList) {
      if (ing.recipe) {
        const recipe = recipes.find((r) => r.id === ing.ingId);
        if (!recipe) continue;

        const recipeOutput = convertToBaseUnit(recipe.quantity ?? 1, recipe.unit ?? "g");
        const ingUsed = convertToBaseUnit(ing.quantity, ing.unit);
        const multiplier = (ingUsed.quantity / recipeOutput.quantity) * parentMultiplier;
        const nextPath = [...path, recipe.name];

        flat.push(...flattenRawIngredients(recipe.ingredients ?? [], multiplier, nextPath));
      } else {
        const ingredient = ingredients.find((i) => i.id === ing.ingId);
        if (!ingredient) continue;

        const base = convertToBaseUnit(ing.quantity, ing.unit);
        const scaledQty = base.quantity * parentMultiplier;
        const costOriginal = getIngredientCost(ing.ingId, scaledQty, base.unit);
        const costUpdated = getIngredientCost(ing.ingId, scaledQty, base.unit, true);
        const delta = costOriginal - costUpdated;

        const name = ingredient.name;
        const fullPath = [...path, name].join(" → ");
        const usedIn = path.length > 0 ? path[path.length - 1] : null;

        let { quantity, unit } = convertToSmallerUnit(scaledQty, base.unit);

        if (unit === "seconds") {
          quantity = quantity / 60;
          unit = "minutes";
        }

        quantity = parseFloat(quantity.toFixed(2));
        if (quantity % 1 === 0) quantity = parseInt(quantity);

        flat.push({
          name,
          usedIn,
          fullPath,
          quantity,
          unit,
          original: costOriginal,
          updated: costUpdated,
          delta
        });
      }
    }

    return flat;
  };

  const rawIngredients = flattenRawIngredients(product.ingredients);
  const displayRawIngredients = rawIngredients
    .filter((item) => item.delta !== 0)
    .sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta));

  return (
    <div className="product-cost-breakdown">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      <h2><em>{toTitleCase(`${product.group} ${product.name}`)}</em></h2>

      <div className="ingredient-table">
        <div className="ingredient-header">
          <div className="col name">Name</div>
          <div className="col quantity">Quantity</div>
          <div className="col cost">Cost</div>
        </div>
        <div className="ingredients-list">
          {product.ingredients.map((ing, i) =>
            renderIngredient(ing, `root-${i}`, 0)
          )}
        </div>
      </div>

      <div className="total-cost">
        Total Cost: <span className="cost">₱{totalCost.toFixed(2)}</span>
      </div>

      {displayRawIngredients.length > 0 && (
        <div className="cost-change-ingredients">
          <h4>
            Ingredients Contributing to Cost Change{" "}
            <span className={diffClass}>
              ({diff > 0 ? "+" : ""}{formatAmount(diff)})
            </span>
          </h4>
          <ul>
            {displayRawIngredients.map((item, i) => {
              const absDelta = Math.abs(item.delta);
              const isCostDown = item.delta > 0;
              const diffClass = isCostDown ? "diff-negative" : "diff-positive";
              const displaySign = isCostDown ? "+" : "-";
              return (
                <li key={i}>
                  <strong>{item.fullPath}</strong>: {formatAmount(item.quantity)} {item.unit} — ₱{formatAmount(item.original)} → ₱{formatAmount(item.updated)}{" "}
                  <span className={diffClass}>({displaySign}{formatAmount(absDelta)})</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <p className="updated-profit">
        Updated Profit: ₱{formatAmount(profit)}
      </p>
    </div>
  );
};

export default ProductCostBreakdown;
