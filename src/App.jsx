import React, { useState } from 'react';
import './style/App.css';
import { ingredients } from './ingredients';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IngredientDetail from './IngredientDetail';

// Unit categories
const weightUnits = ["mg", "g", "kg", "oz", "lb"];
const volumeUnits = ["ml", "l", "tsp", "Tbs", "fl-oz", "cup", "gal"];

function App() {
  const [editingIngredient, setEditingIngredient] = useState(null);
  const [formData, setFormData] = useState({ price: '', quantity: '', unit: '', brand: '' });

  // Sorting logic
  const sortedIngredients = [...ingredients].sort((a, b) => {
    const now = new Date();
    const aDue = new Date(a.lastUpdated);
    aDue.setDate(aDue.getDate() + a.daysBeforeCheck);

    const bDue = new Date(b.lastUpdated);
    bDue.setDate(bDue.getDate() + b.daysBeforeCheck);

    return aDue < now && bDue >= now ? -1 : bDue < now && aDue >= now ? 1 : 0;
  });

  // Handle opening the form
  const handleEditClick = (ingredient, event) => {
    event.stopPropagation();
    setEditingIngredient(ingredient.id);
    setFormData({ 
      price: ingredient.price, 
      quantity: ingredient.quantity, 
      unit: ingredient.unit,
      brand: ingredient.brand || ''
    });
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  // Handle saving changes
  const handleUpdate = () => {
    console.log('Updated Data:', formData);
    setEditingIngredient(null);
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
                      const lastUpdatedDate = new Date(ingredient.lastUpdated);
                      const nextCheckDate = new Date(lastUpdatedDate);
                      nextCheckDate.setDate(lastUpdatedDate.getDate() + ingredient.daysBeforeCheck);
                      const isDue = nextCheckDate <= new Date();

                      // Determine the correct unit category
                      const isWeightUnit = weightUnits.includes(ingredient.unit);
                      const isVolumeUnit = volumeUnits.includes(ingredient.unit);
                      const availableUnits = isWeightUnit ? weightUnits : isVolumeUnit ? volumeUnits : weightUnits;
                      const isEach = ingredient.unit === "each"; // Check if the unit is "each"

                      return (
                        <tr key={ingredient.id || ingredient.name} className={isDue ? 'due-check' : ''}>
                          <td>
                            <Link to={`/ingredient/${ingredient.id}`}>{ingredient.name}</Link>
                          </td>
                          
                          <td>
                            <div className="update-indicators">
                              {[...Array(5)].map((_, i) => (
                                <div key={i} style={{ backgroundColor: i < ingredient.updateLevel ? 'green' : '#ccc' }}></div>
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

                                  {/* Show 'each' as plain text, otherwise use dropdown */}
                                  {isEach ? (
                                    <span className="unit-text">each</span>
                                  ) : (
                                    <select name="unit" value={formData.unit} onChange={handleChange} className="unit-dropdown">
                                      {availableUnits.map((unit) => (
                                        <option key={unit} value={unit}>
                                          {unit}
                                        </option>
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
