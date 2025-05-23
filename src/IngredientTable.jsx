import React from 'react';
import { Link } from 'react-router-dom';

const weightUnits = ["mg", "g", "kg", "oz", "lb"];
const volumeUnits = ["ml", "l", "tsp", "Tbs", "fl-oz", "cup", "gal"];

const IngredientTable = ({
  ingredients,
  editingIngredient,
  setEditingIngredient,
  formData,
  setFormData,
  updatedIngredientId,
  ingredientRefs,
  handleEditClick,
  handleChange,
  handleUpdate,
  getLatestUpdatedDate,
  getAvailableUnits,
  getUpdateDirectionsHistory,
  colors
}) => {
  
  const convertToGramsOrMl = (value, unit) => {
    const num = parseFloat(value);
    if (isNaN(num)) return null;
    const conversions = {
      mg: num / 1000,
      g: num,
      kg: num * 1000,
      oz: num * 28.35,
      lb: num * 453.6,
      ml: num,
      l: num * 1000,
      tsp: num * 4.93,
      Tbs: num * 14.79,
      'fl-oz': num * 29.57,
      cup: num * 236.6,
      gal: num * 3785,
      each: num,
    };
    return conversions[unit] || null;
  };

  const sortedIngredients = [...ingredients].sort((a, b) => {
    const now = new Date();

    const aDueDate = new Date(getLatestUpdatedDate(a));
    aDueDate.setDate(aDueDate.getDate() + a.daysBeforeCheck);

    const bDueDate = new Date(getLatestUpdatedDate(b));
    bDueDate.setDate(bDueDate.getDate() + b.daysBeforeCheck);

    const aOverdue = aDueDate <= now;
    const bOverdue = bDueDate <= now;

    if (aOverdue && !bOverdue) return -1;
    if (!aOverdue && bOverdue) return 1;

    return aDueDate - bDueDate;
  });

  return (
    <div className="table-container">
      <table>
        <tbody>
          {sortedIngredients.map((ingredient) => {
            const lastUpdatedDate = getLatestUpdatedDate(ingredient);
            const nextCheckDate = new Date(lastUpdatedDate);
            nextCheckDate.setDate(lastUpdatedDate.getDate() + ingredient.daysBeforeCheck);
            const isDue = nextCheckDate <= new Date();
            const availableUnits = getAvailableUnits(ingredient.unit);
            const isEach = ingredient.unit === "each";
            const updateDirections = getUpdateDirectionsHistory(ingredient);

            return (
              <tr
                key={ingredient.id || ingredient.name}
                className={isDue ? 'due-check' : ''}
                ref={(el) => (ingredientRefs.current[ingredient.id] = el)}
              >
                <td>
                  <div
                    className="ingredient-name"
                    style={{
                      color: updatedIngredientId === ingredient.id ? 'orange' : 'inherit'
                    }}
                  >
                    <Link to={`/ingredient/${ingredient.id}`}>{ingredient.name}</Link>
                  </div>
                </td>
                
                <td>
                  <div className="update-indicators">
                    {updateDirections.map((direction, i) => (
                      <div
                        key={i}
                        className={`indicator-circle ${direction ? direction : ''} ${direction ? 'filled' : ''}`}
                        style={{ backgroundColor: colors[direction] }}
                      ></div>
                    ))}
                  </div>
                </td>
                
                <td className="editable-cell" onClick={(e) => handleEditClick(ingredient, e)}>
                  {editingIngredient === ingredient.id ? (
                    <div className="floating-form" onClick={(e) => e.stopPropagation()}>
                      <button
                        className="close-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingIngredient(null);
                        }}
                      >
                        ✖
                      </button>
                      <h3>{ingredient.name}</h3>
                      {ingredient.brand && (
                        <div className="brand-container">
                          <input
                            type="text"
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                            placeholder="Brand"
                          />
                        </div>
                      )}
                      <div className="price-container">
                        <input
                          type="text"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          placeholder="Price"
                        />
                        <span>Pesos per</span>
                      </div>
                      <div className="quantity-unit-container">
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="Quantity"
                        />
                        {isEach ? (
                          <span className="unit-text">each</span>
                        ) : (
                          <select name="unit" value={formData.unit} onChange={handleChange} className="unit-dropdown">
                            {availableUnits.map((unit) => (
                              <option key={unit} value={unit}>{unit}</option>
                            ))}
                          </select>
                        )}
                      </div>
                      <button onClick={handleUpdate}>update</button>
                    </div>
                  ) : (
                    <span>{ingredient.price} per {ingredient.quantity} {ingredient.unit}</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default IngredientTable;
