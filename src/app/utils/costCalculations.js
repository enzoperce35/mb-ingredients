import { recipes } from "../recipes/all-recipes";
import { ingredients } from "../ingredients/ingredient-list";
import { convertToBaseUnit } from "./unitConversion";

// Helper functions for cost calculations with unit conversions
export const getIngredientCost = (ingId, usedQty, usedUnit, useUpdated = false) => {
  let item = ingredients.find(i => i.id === ingId);
  if (!item) return 0;

  if (useUpdated) { 
    const stored = localStorage.getItem("ingredient_changes_" + item.id);
    if (stored) {
      try {
        const updatedItem = JSON.parse(stored);
        
        // Ensure updatedItem is an array with at least one element before accessing [0]
        if (Array.isArray(updatedItem) && updatedItem.length > 0) {
          const lastUpdate = updatedItem[updatedItem.length - 1];
          item = { 
            ...item, 
            price: lastUpdate.price !== undefined ? lastUpdate.price : item.price,
            quantity: lastUpdate.quantity !== undefined ? lastUpdate.quantity : item.quantity, 
            unit: lastUpdate.unit !== undefined ? lastUpdate.unit : item.unit 
          };
        }
      } catch (err) {
        console.warn(`Failed to parse localStorage for ingredient ${ingId}`, err);
      }
    }
  }
  
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

export const getRecipeCost = (recipeId, usedQty, usedUnit, useUpdated = false) => {
  const recipe = recipes.find(r => r.id === recipeId);
  if (!recipe) return 0;

  const totalCostForRecipeQty = recipe.ingredients.reduce((total, ing) => {
    const quantity = ing.quantity;
    const unit = ing.unit;

    // Note: Make sure ing.recipe is boolean, and ing.ingId is correct key
    if (ing.recipe) {
      return total + getRecipeCost(ing.ingId, quantity, unit, useUpdated);
    } else {
      return total + getIngredientCost(ing.ingId, quantity, unit, useUpdated);
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

export const getProductCost = (product, useUpdated = false) => {
  return product.ingredients.reduce((total, ing) => {
    if (ing.recipe) {
      return total + getRecipeCost(ing.ingId, ing.quantity, ing.unit, useUpdated);
    } else {
      return total + getIngredientCost(ing.ingId, ing.quantity, ing.unit, useUpdated);
    }
  }, 0);
};
