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

// For cost calculations — standardize units
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

// For user display — convert to smaller human-friendly units
const displayConversions = {
  cup: { Tbs: 16 },
  Tbs: { tsp: 3 },
  l: { ml: 1000 },
  kg: { g: 1000 },
};

export function convertToSmallerUnit(quantity, unit) {
  if (!unit || quantity >= 0.01 || !(unit in displayConversions)) {
    return { quantity, unit };
  }

  let currentQuantity = quantity;
  let currentUnit = unit;

  while (displayConversions[currentUnit]) {
    const [nextUnit, factor] = Object.entries(displayConversions[currentUnit])[0];
    const convertedQuantity = currentQuantity * factor;

    if (convertedQuantity >= 1 || convertedQuantity >= 0.01) {
      return {
        quantity: parseFloat(convertedQuantity.toFixed(2)),
        unit: nextUnit,
      };
    }

    currentQuantity = convertedQuantity;
    currentUnit = nextUnit;
  }

  return {
    quantity: parseFloat(currentQuantity.toFixed(4)), // keep precision
    unit: currentUnit,
  };
}


