import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { ingredients } from './ingredient-list';
import IngredientChanges from './changes';
import IngredientDetail from './detail';
import IngredientTable from './table';

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

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;
  const isOnMain = path === '/';
  const isOnChanges = path === '/ingredient-changes';

  const title = isOnMain
    ? 'UPDATES Test'
    : isOnChanges
    ? 'CHANGES'
    : path.startsWith('/ingredient/')
    ? 'Ingredient Details'
    : '';

  const handleLeftClick = () => {
    if (isOnChanges) navigate('/');
  };

  const handleRightClick = () => {
    if (isOnMain) navigate('/ingredient-changes');
  };

  return (
    <header className="app-header">
      <button className="arrow-button left" onClick={handleLeftClick} disabled={!isOnChanges} aria-label="Go to Ingredient Table">
        ◀
      </button>
      <h1>{title}</h1>
      <button className="arrow-button right" onClick={handleRightClick} disabled={!isOnMain} aria-label="Go to Ingredient Changes">
        ▶
      </button>
    </header>
  );
}

// Convert units to grams or ml for comparison
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

// Compare unit price and return direction
const getPriceChangeDirection = (original, updated) => {
  const originalAmount = convertToGramsOrMl(original.quantity, original.unit);
  const updatedAmount = convertToGramsOrMl(updated.quantity, updated.unit);

  if (!originalAmount || !updatedAmount) return 'equal';

  const originalPricePerUnit = parseFloat(original.price) / originalAmount;
  const updatedPricePerUnit = parseFloat(updated.price) / updatedAmount;

  if (updatedPricePerUnit > originalPricePerUnit) return 'greater';
  if (updatedPricePerUnit < originalPricePerUnit) return 'lower';
  return 'equal';
};

function Ingredients() {
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
    if (formData.price === '' || isNaN(formData.price)) {
      alert('Please enter a valid price.');
      return;
    }
    if (formData.quantity === '' || isNaN(formData.quantity)) {
      alert('Please enter a valid quantity.');
      return;
    }

    const currentDate = new Date().toISOString();
    const updatedIngredient = ingredients.find(ing => ing.id === editingIngredient);

    const priceChangeDirection = getPriceChangeDirection(
      {
        price: updatedIngredient.price,
        quantity: updatedIngredient.quantity,
        unit: updatedIngredient.unit,
      },
      {
        price: formData.price,
        quantity: formData.quantity,
        unit: formData.unit,
      }
    );

    const ingredientChange = {
      price: formData.price,
      quantity: formData.quantity,
      unit: formData.unit,
      brand: formData.brand || updatedIngredient.brand,
      lastUpdated: currentDate,
      priceChangeDirection,
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
    return isWeightUnit ? weightUnits : isVolumeUnit ? volumeUnits : ["each"];
  };

  const getUpdateDirectionsHistory = (ingredient) => {
    const changes = JSON.parse(localStorage.getItem(`ingredient_changes_${ingredient.id}`)) || [];
    const directions = [];

    const lastUpdatedDate = new Date(ingredient.lastUpdated);
    const filteredChanges = changes.filter(change => new Date(change.lastUpdated) > lastUpdatedDate);
    const recentChanges = filteredChanges.slice(-5);

    for (let i = 0; i < 5; i++) {
      directions[i] = i < recentChanges.length ? recentChanges[recentChanges.length - 1 - i].priceChangeDirection : null;
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
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
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

export default Ingredients;
