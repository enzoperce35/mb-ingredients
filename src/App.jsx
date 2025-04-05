import React, { useState, useEffect, useRef } from 'react';
import './style/App.css';
import { ingredients } from './ingredients';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IngredientDetail from './IngredientDetail';

const weightUnits = ["mg", "g", "kg", "oz", "lb"];
const volumeUnits = ["ml", "l", "tsp", "Tbs", "fl-oz", "cup", "gal"];

// ✅ New Helper Function
const getLatestUpdatedDate = (ingredient) => {
  const storedChanges = JSON.parse(localStorage.getItem(`ingredient_changes_${ingredient.id}`)) || [];

  const latestStoredDate = storedChanges.reduce((latest, change) => {
    const changeDate = new Date(change.lastUpdated);
    return changeDate > latest ? changeDate : latest;
  }, new Date(0));

  const originalDate = new Date(ingredient.lastUpdated);
  return latestStoredDate > originalDate ? latestStoredDate : originalDate;
};

function App() {
  const [editingIngredient, setEditingIngredient] = useState(null);
  const [formData, setFormData] = useState({ price: '', quantity: '', unit: '', brand: '' });
  const [updatedIngredientId, setUpdatedIngredientId] = useState(null);  // Track updated ingredient ID

  const ingredientRefs = useRef({}); // Create ref object to store rows

  const sortedIngredients = [...ingredients].sort((a, b) => {
    const now = new Date();
    const aDue = getLatestUpdatedDate(a);
    aDue.setDate(aDue.getDate() + a.daysBeforeCheck);

    const bDue = getLatestUpdatedDate(b);
    bDue.setDate(bDue.getDate() + b.daysBeforeCheck);

    return aDue < now && bDue >= now ? -1 : bDue < now && aDue >= now ? 1 : 0;
  });

  useEffect(() => {
    if (editingIngredient) {
      const ingredient = ingredients.find(ing => ing.id === editingIngredient);
      setFormData({
        price: ingredient.price,
        quantity: ingredient.quantity,
        unit: ingredient.unit,
        brand: ingredient.brand || '',
      });
    }
  }, [editingIngredient]);

  const handleEditClick = (ingredient, event) => {
    event.stopPropagation();
    setEditingIngredient(ingredient.id);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  const handleUpdate = () => {
    if (!formData.price || isNaN(formData.price)) {
      alert('Please enter a valid price.');
      return;
    }
    if (!formData.quantity || isNaN(formData.quantity)) {
      alert('Please enter a valid quantity.');
      return;
    }

    const currentDate = new Date().toISOString();
    const updatedIngredient = ingredients.find(ing => ing.id === editingIngredient);

    const ingredientChange = {
      price: formData.price,
      quantity: formData.quantity,
      unit: formData.unit,
      brand: formData.brand || updatedIngredient.brand,
      lastUpdated: currentDate,
    };

    const existingChanges = JSON.parse(localStorage.getItem(`ingredient_changes_${updatedIngredient.id}`)) || [];
    existingChanges.push(ingredientChange);
    localStorage.setItem(`ingredient_changes_${updatedIngredient.id}`, JSON.stringify(existingChanges));

    setEditingIngredient(null);
    setUpdatedIngredientId(updatedIngredient.id);  // Update state to reflect the changed ingredient

    // Scroll to updated ingredient row after update
    setTimeout(() => {
      const el = ingredientRefs.current[updatedIngredient.id];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const getAvailableUnits = (unit) => {
    const isWeightUnit = weightUnits.includes(unit);
    const isVolumeUnit = volumeUnits.includes(unit);
    return isWeightUnit ? weightUnits : isVolumeUnit ? volumeUnits : weightUnits;
  };

  const getUpdateDirectionsHistory = (ingredient) => {
    const changes = JSON.parse(localStorage.getItem(`ingredient_changes_${ingredient.id}`)) || [];
    const directions = [];
    
    const recentChanges = changes.slice(-5);
    for (let i = 0; i < 5; i++) {
      if (i < recentChanges.length) {
        const change = recentChanges[recentChanges.length - 1 - i];
        const basePricePerGramOrMl = parseFloat(ingredient.price) / convertToGramsOrMl(ingredient.quantity, ingredient.unit);
        const changePerGramOrMl = parseFloat(change.price) / convertToGramsOrMl(change.quantity, change.unit);

        if (changePerGramOrMl > basePricePerGramOrMl) {
          directions[i] = 'greater';
        } else if (changePerGramOrMl < basePricePerGramOrMl) {
          directions[i] = 'lower';
        } else {
          directions[i] = 'equal';
        }
      } else {
        directions[i] = null;
      }
    }

    return directions;
  };

  const colors = {
    greater: 'red',
    lower: 'green',
    equal: 'blue'
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
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
            </div>
          }
        />
        <Route path="/ingredient/:ingredientId" element={<IngredientDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
