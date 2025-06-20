import React, { useEffect, useState } from "react";
import { ingredients } from "./ingredient-list";
import { getScaledPrice } from "../utils/scaledPrice";

export default function IngredientChanges() {
  const [ingredientChanges, setIngredientChanges] = useState([]);

  useEffect(() => {
    const matchedIngredients = [];

    ingredients.forEach((ingredient) => {
      const key = `ingredient_changes_${ingredient.id}`;
      const rawData = localStorage.getItem(key);

      if (rawData) {
        try {
          const updates = JSON.parse(rawData);
          if (Array.isArray(updates)) {
            const ingredientDate = new Date(ingredient.lastUpdated);

            const validUpdates = updates
              .filter((update) => {
                const updateDate = new Date(update.lastUpdated);
                return !isNaN(updateDate) && updateDate > ingredientDate;
              })
              .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
              .slice(0, 5);

            if (validUpdates.length === 5) {
              const allGreater = validUpdates.every(
                (u) => u.priceChangeDirection === "greater"
              );
              const allLower = validUpdates.every(
                (u) => u.priceChangeDirection === "lower"
              );

              if (allGreater || allLower) {
                matchedIngredients.push({
                  ...ingredient,
                  updates: validUpdates,
                  direction: allGreater ? "Increase" : "Decrease",
                });
              }
            }
          }
        } catch (e) {
          console.error(`Error parsing updates for ${ingredient.name}`, e);
        }
      }
    });

    setIngredientChanges(matchedIngredients);
  }, []);

  function handleExportJS() {
    const avgPriceMap = {};
    ingredientChanges.forEach((ingredient) => {
      const baseQtyRaw = Number(ingredient.quantity);
      const baseUnit = ingredient.unit;

      const scaledPrices = ingredient.updates
        .map((update) => getScaledPrice(update, baseQtyRaw, baseUnit))
        .filter((p) => p !== null);

      const avgScaledPrice =
        scaledPrices.length > 0
          ? scaledPrices.reduce((sum, p) => sum + p, 0) / scaledPrices.length
          : null;

      if (avgScaledPrice !== null) {
        avgPriceMap[ingredient.id] = avgScaledPrice;
      }
    });

    const nowISOString = new Date().toISOString();

    const updatedIngredients = ingredients.map((ing) => {
      if (avgPriceMap.hasOwnProperty(ing.id)) {
        return {
          ...ing,
          price: Number(avgPriceMap[ing.id].toFixed(2)),
          lastUpdated: nowISOString,
        };
      }
      return ing;
    });

    const jsContent = `export const ingredients = ${JSON.stringify(updatedIngredients, null, 2)};\n`;

    const blob = new Blob([jsContent], { type: "application/javascript" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `ingredients-updated-${nowISOString.slice(0, 10)}.js`;
    a.click();

    URL.revokeObjectURL(url);

    alert("Ingredients JS file downloaded with updated prices and timestamps!");
  }

  return (
    <div className="ingredient-changes-container">
      {ingredientChanges.length > 0 ? (
        ingredientChanges.map((ingredient) => {
          const baseQtyRaw = Number(ingredient.quantity);
          const baseUnit = ingredient.unit;
          const displayUnit = ingredient.alterUnit || `${ingredient.quantity} ${ingredient.unit}`;

          const scaledPrices = ingredient.updates
            .map((update) => getScaledPrice(update, baseQtyRaw, baseUnit))
            .filter((p) => p !== null);

          const avgScaledPrice =
            scaledPrices.length > 0
              ? scaledPrices.reduce((sum, p) => sum + p, 0) / scaledPrices.length
              : null;

          const originalPrice = Number(ingredient.price);
          const priceDiff =
            avgScaledPrice !== null ? avgScaledPrice - originalPrice : null;
          const arrow =
            priceDiff !== null ? (priceDiff > 0 ? "↑" : "↓") : "";
          const arrowColor =
            priceDiff !== null ? (priceDiff > 0 ? "red" : "green") : "black";
          const formattedDiff =
            priceDiff !== null
              ? `₱${Math.abs(priceDiff).toFixed(2)}`
              : "N/A";

          return (
            <div key={ingredient.id} className="ingredient-container">
              <div className="price-diff" style={{ color: arrowColor }}>
                {arrow} {formattedDiff}
              </div>

              <h3>{ingredient.name}</h3>
              <p>
                <strong>Brand:</strong> {ingredient.brand} <br />
                <strong>Price:</strong> ₱{ingredient.price} per {displayUnit}
              </p>

              <table className="ingredient-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Brand</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {[...ingredient.updates]
                    .reverse()
                    .map((update, idx) => {
                      const scaled = getScaledPrice(update, baseQtyRaw, baseUnit);
                      const updateDisplayUnit = update.alterUnit
                        ? update.alterUnit
                        : `${update.quantity} ${update.unit === "each" ? "pcs" : update.unit}`;
                      return (
                        <tr key={idx}>
                          <td>{new Date(update.lastUpdated).toLocaleDateString()}</td>
                          <td>{update.brand ?? ""}</td>
                          <td>
                            {scaled !== null
                              ? `₱${scaled.toFixed(2)} per ${displayUnit}`
                              : `₱${update.price} (${updateDisplayUnit})`}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={2}><strong>Average Scaled Price</strong></td>
                    <td>
                      {avgScaledPrice !== null
                        ? `₱${avgScaledPrice.toFixed(2)} per ${displayUnit}`
                        : "N/A"}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          );
        })
      ) : (
        <p>No Significant Changes Yet.</p>
      )}

      <button onClick={handleExportJS} className="export-button">
        Download Ingredients as JS
      </button>
    </div>
  );
}
