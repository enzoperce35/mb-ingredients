import { useParams, useNavigate } from 'react-router-dom';
import { ingredients } from './ingredients';

function IngredientDetail() {
  const { ingredientId } = useParams();
  const navigate = useNavigate(); // useNavigate hook to navigate programmatically

  const ingredient = ingredients.find((item) => String(item.id) === String(ingredientId));

  if (!ingredient) {
    return <h2>Ingredient not found</h2>;
  }

  let updateHistory = JSON.parse(localStorage.getItem(`ingredient_changes_${ingredient.id}`)) || [];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const lastUpdatedFormatted = formatDate(ingredient.lastUpdated);
  const nextCheckDate = new Date(ingredient.lastUpdated);
  nextCheckDate.setDate(nextCheckDate.getDate() + ingredient.daysBeforeCheck);
  const nextCheckFormatted = formatDate(nextCheckDate);

  const handleDeleteUpdate = (index) => {
    // Remove the update from the array
    updateHistory = updateHistory.filter((_, i) => i !== index);
    // Update the localStorage with the new array
    localStorage.setItem(`ingredient_changes_${ingredient.id}`, JSON.stringify(updateHistory));
    // Force the component to re-render (if you're using state, you'd use setState)
    window.location.reload();  // This reloads the page to reflect changes (can be optimized)
  };

  return (
    <div className="ingredient-detail">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        &#8592; Back
      </button>

      <h2>{ingredient.name}</h2>
      <p><strong>Price:</strong> {ingredient.price} per {ingredient.quantity} {ingredient.unit}</p>
      <p><strong>Last Updated:</strong> {lastUpdatedFormatted}</p>
      <p className='next-check'><strong>Next Check:</strong> {nextCheckFormatted}</p>

      {/* Update History as a Table */}
      {updateHistory.length > 0 && (
        <div className="update-history-container">
          <table className="update-history">
            <thead>
              <tr>
                <th>Updates</th>
                <th>Change</th>
                <th>Brand</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {updateHistory.map((change, index) => {
                const changeDateFormatted = formatDate(change.lastUpdated);
                const priceQuantityUnit = `P${change.price} / ${change.quantity}${change.unit}`;

                return (
                  <tr key={index}>
                    <td>{changeDateFormatted}</td>
                    <td>{priceQuantityUnit}</td>
                    <td>{change.brand}</td>
                    <td>
                      {/* Delete Button */}
                      <button className="delete-button" onClick={() => handleDeleteUpdate(index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default IngredientDetail;
