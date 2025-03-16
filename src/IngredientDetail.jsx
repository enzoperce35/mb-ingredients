import { useParams } from 'react-router-dom';
import { ingredients } from './ingredients';

function IngredientDetail() {
  const { ingredientId } = useParams();

  // Ensure ingredientId is a string before comparison
  const ingredient = ingredients.find((item) => String(item.id) === String(ingredientId));

  if (!ingredient) {
    return <h2>Ingredient not found</h2>;
  }

  return (
    <div className="ingredient-detail">
      <h2>{ingredient.name}</h2>
      <p><strong>Price:</strong> {ingredient.price} per {ingredient.quantity} {ingredient.unit}</p>
      <p><strong>Last Updated:</strong> {ingredient.lastUpdated}</p>
      <p><strong>Next Check:</strong> {ingredient.daysBeforeCheck} days after last update</p>
      <p><strong>Update Level:</strong> {ingredient.updateLevel}/5</p>
    </div>
  );
}

export default IngredientDetail;
