import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const IngredientHistory = () => {
  const [ingredientHistory, setIngredientHistory] = useState([]);

  useEffect(() => {
    const storedIngredients = JSON.parse(localStorage.getItem("ingredients")) || [];
    setIngredientHistory(storedIngredients);
  }, []);

  return (
    <div className="history-container">
      <h2>Ingredient History</h2>
      <Link to="">← Back to Ingredients</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Updated</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {ingredientHistory.map((ingredient) => (
            <tr key={ingredient.id}>
              <td>{ingredient.name}</td>
              <td>{new Date(ingredient.lastUpdated).toLocaleDateString()}</td>
              <td>{ingredient.price} Pesos</td>
              <td>{ingredient.quantity} {ingredient.unit}</td>
              <td>{ingredient.brand || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IngredientHistory;
