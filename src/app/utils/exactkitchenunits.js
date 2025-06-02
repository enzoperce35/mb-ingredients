const weightUnits = ["mg", "g", "kg", "oz", "lb"];
const volumeUnits = ["ml", "l", "tsp", "Tbs", "fl-oz", "cup", "gal"];

const volumeToMl = {
  "ml": 1,
  "l": 1000,
  "tsp": 4.92892,
  "Tbs": 14.7868,
  "fl-oz": 29.5735,
  "cup": 240,
  "gal": 3785.41,
};

const weightToG = {
  "mg": 0.001,
  "g": 1,
  "kg": 1000,
  "oz": 28.3495,
  "lb": 453.592,
};

const commonVolumeUnits = [
  { label: "pinch", ml: 0.31 },
  { label: "1/8 tsp", ml: 0.616 },
  { label: "1/4 tsp", ml: 1.23 },
  { label: "1/2 tsp", ml: 2.46 },
  { label: "1 tsp", ml: 4.93 },
  { label: "1/2 Tbs", ml: 7.39 },
  { label: "1 Tbs", ml: 14.79 },
  { label: "1/8 cup", ml: 30 },
  { label: "1/4 cup", ml: 60 },
  { label: "1/3 cup", ml: 80 },
  { label: "1/2 cup", ml: 120 },
  { label: "1 cup", ml: 240 },
];

const commonWeightUnits = [
  { label: "pinch", g: 0.36 },
  { label: "1 oz", g: 28.35 },
  { label: "1/4 lb", g: 113.4 },
  { label: "1/2 lb", g: 226.8 },
  { label: "1 lb", g: 453.6 },
];

// Convert decimal to common fraction (very simple)
function toCommonFraction(decimal) {
  const fractions = {
    0.125: "1/8",
    0.25: "1/4",
    0.333: "1/3",
    0.5: "1/2",
    0.667: "2/3",
    0.75: "3/4",
    0.875: "7/8",
  };
  const rounded = Object.keys(fractions).find(key =>
    Math.abs(decimal - parseFloat(key)) < 0.01
  );
  return rounded ? fractions[rounded] : null;
}

function convertToExactKitchenUnit(quantity, unit) {
  if (unit === "each") {
    const fraction = toCommonFraction(quantity);
    return fraction ? `${fraction} each` : `${quantity} each`;
  }

  if (volumeUnits.includes(unit)) {
    const mlFactor = volumeToMl[unit];
    if (!mlFactor) return `${quantity} ${unit}`;
    const ml = quantity * mlFactor;
    const match = commonVolumeUnits.find(item =>
      Math.abs(item.ml - ml) < 0.05
    );
    return match ? match.label : `${quantity} ${unit}`;
  }

  if (weightUnits.includes(unit)) {
    const gFactor = weightToG[unit];
    if (!gFactor) return `${quantity} ${unit}`;
    const g = quantity * gFactor;
    const match = commonWeightUnits.find(item =>
      Math.abs(item.g - g) < 0.05
    );
    return match ? match.label : `${quantity} ${unit}`;
  }

  return `${quantity} ${unit}`;
}

export default convertToExactKitchenUnit;
