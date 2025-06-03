import React from "react";
import { useParams } from "react-router-dom";
import RecipeDetail from "./recipe-detail";
import ExtraRecipeDetail from "./ExtraRecipeDetail";
import { recipes } from "./all-recipes";

export default function RecipePageRouter() {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) return <p>Recipe not found</p>;

  return recipe.type === "e" ? <ExtraRecipeDetail /> : <RecipeDetail />;
}
