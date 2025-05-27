import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ingredients } from './ingredient-list';

function IngredientDetail() {
  const { ingredientId } = useParams();
  const navigate = useNavigate();

  const ingredient = ingredients.find((item) => String(item.id) === String(ingredientId));

  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (ingredient) {
      const storedHistory = JSON.parse(localStorage.getItem(`ingredient_changes_${ingredient.id}`)) || [];
      setHistory(storedHistory);
    }
  }, [ingredient]);

  if (!ingredient) {
    return <h2>Ingredient not found</h2>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const latestUpdate = history.length > 0
    ? history.reduce((latest, entry) =>
        new Date(entry.lastUpdated) > new Date(latest.lastUpdated) ? entry : latest
      )
    : null;

  const effectiveLastUpdated = latestUpdate?.lastUpdated || ingredient.lastUpdated;
  const lastUpdatedFormatted = formatDate(effectiveLastUpdated);

  const nextCheckDate = new Date(effectiveLastUpdated);
  nextCheckDate.setDate(nextCheckDate.getDate() + ingredient.daysBeforeCheck);
  const nextCheckFormatted = formatDate(nextCheckDate);

  const handleDeleteUpdate = (index) => {
    const newHistory = history.filter((_, i) => i !== index);
    localStorage.setItem(`ingredient_changes_${ingredient.id}`, JSON.stringify(newHistory));
    setHistory(newHistory);
  };

  return (
    <div className="ingredient-detail">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        &#8592; Back
      </button>

      <h2>{ingredient.name}</h2>
      <p><strong>Price:</strong> {ingredient.price} per {ingredient.quantity} {ingredient.unit === 'each' ? 'pcs' : ingredient.unit}</p>
      <p><strong>Last Updated:</strong> {lastUpdatedFormatted}</p>
      <p className='next-check'><strong>Next Check:</strong> {nextCheckFormatted}</p>

      {/* Update History Table */}
      {history.length > 0 ? (
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
              {history.map((change, index) => {
                const changeDateFormatted = formatDate(change.lastUpdated);
                const priceQuantityUnit = `P${change.price} / ${change.quantity}${change.unit}`;

                return (
                  <tr key={index}>
                    <td>{changeDateFormatted}</td>
                    <td>{priceQuantityUnit}</td>
                    <td>{change.brand}</td>
                    <td>
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
      ) : (
        <p>No update history available.</p>
      )}
    </div>
  );
}

export default IngredientDetail;
