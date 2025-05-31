import { recipes } from "../recipes/all-recipes";
import { ingredients } from "../ingredients/ingredient-list";
import { convertToBaseUnit } from "./unitConversion";

// Helper functions for cost calculations with unit conversions
export const getIngredientCost = (ingId, usedQty, usedUnit) => {
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

export const getRecipeCost = (recipeId, usedQty, usedUnit) => {
  const recipe = recipes.find(r => r.id === recipeId);
  if (!recipe) return 0;

  const totalCostForRecipeQty = recipe.ingredients.reduce((total, ing) => {
    const quantity = ing.quantity;
    const unit = ing.unit;
    
    if (ing.recipe) {
      return total + getRecipeCost(ing.ingId, quantity, unit);
    } else {
      return total + getIngredientCost(ing.ingId, quantity, unit);
    }
  }, 0);

  const { quantity: baseRecipeQty, unit: baseRecipeUnit } = convertToBaseUnit(recipe.quantity, recipe.unit);
  const { quantity: baseUsedQty, unit: baseUsedUnit } = convertToBaseUnit(usedQty, usedUnit);

  if (baseRecipeQty === 0) return 0;

  if (baseRecipeUnit !== baseUsedUnit) {
    console.warn(`Unit mismatch for recipe ${recipe.name}: recipe unit (${baseRecipeUnit}) vs used unit (${baseUsedUnit})`);
    return 0;
  }

  const costPerBaseUnit = totalCostForRecipeQty / baseRecipeQty;
  return costPerBaseUnit * baseUsedQty;
};

export const getProductCost = (product) => {
  return product.ingredients.reduce((total, ing) => {
    if (ing.recipe) {
      return total + getRecipeCost(ing.ingId, ing.quantity, ing.unit);
    } else {
      return total + getIngredientCost(ing.ingId, ing.quantity, ing.unit);
    }
  }, 0);
};
