import React, { useEffect, useState } from "react";
import { ingredients } from "./ingredients";

const conversionTable = {
  mg: { to: "g", factor: 0.001 },
  g: { to: "g", factor: 1 },
  kg: { to: "g", factor: 1000 },
  oz: { to: "g", factor: 28.3495 },
  lb: { to: "g", factor: 453.592 },
  ml: { to: "ml", factor: 1 },
  l: { to: "ml", factor: 1000 },
  tsp: { to: "ml", factor: 4.92892 },
  Tbs: { to: "ml", factor: 14.7868 },
  "fl-oz": { to: "ml", factor: 29.5735 },
  cup: { to: "ml", factor: 240 },
  gal: { to: "ml", factor: 3785.41 },
};

function convertToBaseUnit(quantity, unit) {
  const entry = conversionTable[unit];
  if (!entry) return { quantity, unit };
  return {
    quantity: quantity * entry.factor,
    unit: entry.to,
  };
}

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
            const recentUpdates = updates.filter((update) => {
              const updateDate = new Date(update.lastUpdated);
              const ingredientDate = new Date(ingredient.lastUpdated);
              return !isNaN(updateDate) && updateDate > ingredientDate;
            });

            if (recentUpdates.length >= 5) {
              const allGreater = recentUpdates.every(
                (u) => u.priceChangeDirection === "greater"
              );
              const allLower = recentUpdates.every(
                (u) => u.priceChangeDirection === "lower"
              );

              if (allGreater || allLower) {
                matchedIngredients.push({
                  ...ingredient,
                  updates: recentUpdates,
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

  return (
    <div>
      {ingredientChanges.length > 0 ? (
        ingredientChanges.map((ingredient) => {
          const baseQtyRaw = Number(ingredient.quantity);
          const baseUnit = ingredient.unit;

          const scaledPrices = ingredient.updates
            .map((update) => {
              const updateQty = Number(update.quantity);
              if (!baseQtyRaw || !updateQty || !baseUnit || !update.unit) return null;

              const { quantity: baseQty, unit: baseBase } = convertToBaseUnit(baseQtyRaw, baseUnit);
              const { quantity: updateQtyConv, unit: updateBase } = convertToBaseUnit(updateQty, update.unit);

              if (baseBase !== updateBase || updateQtyConv === 0) return null;
              return (update.price / updateQtyConv) * baseQty;
            })
            .filter((p) => p !== null);

          const avgScaledPrice =
            scaledPrices.length > 0
              ? scaledPrices.reduce((sum, p) => sum + p, 0) / scaledPrices.length
              : null;

          const originalPrice = Number(ingredient.price);
          const priceDiff = avgScaledPrice !== null ? avgScaledPrice - originalPrice : null;
          const arrow = priceDiff !== null ? (priceDiff > 0 ? "↑" : "↓") : "";
          const arrowColor = priceDiff !== null ? (priceDiff > 0 ? "red" : "green") : "black";
          const formattedDiff = priceDiff !== null ? `₱${Math.abs(priceDiff).toFixed(2)}` : "N/A";

          return (
            <div key={ingredient.id} className="ingredient-container">
              <div className="price-diff" style={{ color: arrowColor }}>
                {arrow} {formattedDiff}
              </div>

              <h3>{ingredient.name}</h3>
              <p>
                <strong>Brand:</strong> {ingredient.brand} <br />
                <strong>Price:</strong> ₱{ingredient.price} per {ingredient.quantity} {ingredient.unit}
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
                  {ingredient.updates.map((update, idx) => {
                    const updateQty = Number(update.quantity);
                    const { quantity: baseQty, unit: baseBase } = convertToBaseUnit(baseQtyRaw, baseUnit);
                    const { quantity: updateQtyConv, unit: updateBase } = convertToBaseUnit(updateQty, update.unit);

                    const scaled =
                      baseBase === updateBase && updateQtyConv !== 0
                        ? (update.price / updateQtyConv) * baseQty
                        : null;

                    return (
                      <tr key={idx}>
                        <td>{new Date(update.lastUpdated).toLocaleDateString()}</td>
                        <td>{update.brand ?? ""}</td>
                        <td>
                          {scaled !== null
                            ? `₱${scaled.toFixed(2)} per ${ingredient.quantity} ${ingredient.unit}`
                            : `₱${update.price} (${update.quantity} ${update.unit})`}
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
                        ? `₱${avgScaledPrice.toFixed(2)} per ${ingredient.quantity} ${ingredient.unit}`
                        : "N/A"}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          );
        })
      ) : (
        <p>No chnages yet.</p>
      )}
    </div>
  );
} 
