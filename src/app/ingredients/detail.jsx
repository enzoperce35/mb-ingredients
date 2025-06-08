import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ingredients } from './ingredient-list';
import { getScaledPrice } from '../utils/scaledPrice';

function IngredientDetail() {
  const { ingredientId } = useParams();
  const navigate = useNavigate();
  const ingredient = ingredients.find((item) => String(item.id) === String(ingredientId));
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (ingredient) {
      try {
        const storedHistory = JSON.parse(localStorage.getItem(`ingredient_changes_${ingredient.id}`)) || [];
        setHistory(storedHistory);
      } catch (error) {
        console.error('Failed to parse history from localStorage:', error);
        setHistory([]);
      }
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
      
      {ingredient.brand && (
        <p>
          <strong>Brand:</strong> {ingredient.brand}
        </p>
      )}
      
      <p>
        <strong>Price:</strong> {ingredient.price} per{" "}
        {ingredient.alterUnit
          ? ingredient.alterUnit
          : `${ingredient.quantity} ${ingredient.unit === 'each' ? 'pcs' : ingredient.unit}`}
      </p>
      
      <p><strong>Last Updated:</strong> {lastUpdatedFormatted}</p>
      <p className='next-check'><strong>Next Check:</strong> {nextCheckFormatted}</p>

      {/* Update History Table */}
      {history.length > 0 ? (
        <div className="update-history-container">
          <table className="update-history">
            <thead>
              <tr>
                <th>Date</th>
                <th className="brand-col">Brand</th>
                <th className='update-col'>Update</th>
                <th>Scaled</th>
                <th>Change</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {history.map((change, index) => {
                const changeDateFormatted = formatDate(change.lastUpdated);
                const priceQuantityUnit = `₱${change.price} / ${change.alterUnit ? change.alterUnit : `${change.quantity}${change.unit}`}`;
                const scaled = getScaledPrice(change, ingredient.quantity, ingredient.unit);
                const scaledPrice = `₱${scaled?.toFixed(2) ?? "N/A"} / ${ingredient.alterUnit ? ingredient.alterUnit : `${ingredient.quantity} ${ingredient.unit === 'each' ? 'pcs' : ingredient.unit}`}`;

                const priceDiff = scaled !== null ? scaled - Number(ingredient.price) : null;
                const arrow = priceDiff !== null ? (priceDiff > 0 ? "↑" : "↓") : "";
                const arrowColor = priceDiff !== null ? (priceDiff > 0 ? "red" : "green") : "black";
                const formattedDiff = priceDiff !== null ? `₱${Math.abs(priceDiff).toFixed(2)}` : "N/A";

                return (
                  <tr key={index}>
                    <td>{changeDateFormatted}</td>
                    <td className="brand-col">{change.brand}</td>
                    <td className='update-col'>{priceQuantityUnit}</td>
                    <td>{scaledPrice}</td>
                    <td style={{ color: arrowColor }}>
                      {`${arrow} ${formattedDiff} / ${ingredient.alterUnit ? ingredient.alterUnit : `${ingredient.quantity} ${ingredient.unit === 'each' ? 'pcs' : ingredient.unit}`}`}
                    </td>
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
