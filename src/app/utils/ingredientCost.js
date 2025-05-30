import { ingredients } from "../ingredients/ingredient-list";
import { convertToBaseUnit } from "./unitConversion";

// Helper functions for cost calculations with unit conversions
const getIngredientCost = (ingId, usedQty, usedUnit) => {console.log([ingId, usedQty, usedUnit])
  const item = ingredients.find(i => i.id === ingId);
  if (!item) return 0;

  const { quantity: baseUsedQty, unit: baseUsedUnit } = convertToBaseUnit(usedQty, usedUnit);
  const { quantity: baseItemQty, unit: baseItemUnit } = convertToBaseUnit(item.quantity, item.unit);

  if (baseUsedUnit !== baseItemUnit) {
    console.warn(`Unit mismatch for ingredient ${item.name}: used unit (${baseUsedUnit}) vs item unit (${baseItemUnit})`);
    return 0;
  }

  if (baseItemQty === 0) return 0;

  const costPerBaseUnit = item.price / baseItemQty;
  return costPerBaseUnit * baseUsedQty;
};

export default getIngredientCost;
