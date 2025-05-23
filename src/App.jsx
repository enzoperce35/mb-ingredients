import React, { useState, useEffect, useRef } from 'react';
import './style/App.css';
import { ingredients } from './ingredients';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IngredientDetail from './IngredientDetail';
import IngredientTable from './IngredientTable';
import IngredientChanges from './IngredientChanges';

const weightUnits = ["mg", "g", "kg", "oz", "lb"];
const volumeUnits = ["ml", "l", "tsp", "Tbs", "fl-oz", "cup", "gal"];

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
  const [updatedIngredientId, setUpdatedIngredientId] = useState(null);

  const ingredientRefs = useRef({});

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
    setUpdatedIngredientId(updatedIngredient.id);

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

    const lastUpdatedDate = new Date(ingredient.lastUpdated);

    const filteredChanges = changes.filter(change => new Date(change.lastUpdated) > lastUpdatedDate);
    const recentChanges = filteredChanges.slice(-5);

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
              <nav style={{ marginBottom: '1rem' }}>
                <Link to="/ingredient-changes">
                  <button type="button">View Ingredient Changes</button>
                </Link>
              </nav>
              <IngredientTable
                ingredients={ingredients}
                editingIngredient={editingIngredient}
                setEditingIngredient={setEditingIngredient}
                formData={formData}
                setFormData={setFormData}
                updatedIngredientId={updatedIngredientId}
                ingredientRefs={ingredientRefs}
                handleEditClick={handleEditClick}
                handleChange={handleChange}
                handleUpdate={handleUpdate}
                getLatestUpdatedDate={getLatestUpdatedDate}
                getAvailableUnits={getAvailableUnits}
                getUpdateDirectionsHistory={getUpdateDirectionsHistory}
                colors={colors}
              />
            </div>
          }
        />
        <Route path="/ingredient/:ingredientId" element={<IngredientDetail />} />
        <Route path="/ingredient-changes" element={<IngredientChanges />} />
      </Routes>
    </Router>
  );
}

export default App;
