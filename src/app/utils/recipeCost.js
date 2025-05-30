import { recipes } from "../recipes/all-recipes";
import getIngredientCost from "./ingredientCost";
import { convertToBaseUnit } from "./unitConversion";

const getRecipeCost = (recipeId, usedQty, usedUnit) => {
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

export default getRecipeCost;
