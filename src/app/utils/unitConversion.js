// src/utils/unitConversion.js
const conversionTable = {
  mg: { to: "g", factor: 0.001 },
  g: { to: "g", factor: 1 },
  kg: { to: "g", factor: 1000 },
  oz: { to: "g", factor: 28.3495 },
  lb: { to: "g", factor: 453.592 },
  ml: { to: "ml", factor: 1 },
  l: { to: "ml", factor: 1000 },
  tsp: { to: "ml", factor: 4.92892 },
  tbs: { to: "ml", factor: 14.7868 },
  "fl-oz": { to: "ml", factor: 29.5735 },
  cup: { to: "ml", factor: 240 },
  gal: { to: "ml", factor: 3785.41 },
};

export function convertToBaseUnit(quantity, unit) {
  if (!unit) return { quantity, unit };
  const unitKey = unit.toLowerCase();
  const entry = conversionTable[unitKey];
  if (!entry) return { quantity, unit };
  return {
    quantity: quantity * entry.factor,
    unit: entry.to,
  };
}
