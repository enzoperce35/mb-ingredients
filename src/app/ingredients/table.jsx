import React from "react";
import { Link } from "react-router-dom";

const timeUnitLabels = {
  second: "seconds",
  minute: "minutes",
  hour: "hours",
};

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
  colors,
}) => {
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
          {sortedIngredients
            .filter((ingredient) => ingredient.type !== "c")
            .map((ingredient) => {
              const lastUpdatedDate = getLatestUpdatedDate(ingredient);
              const nextCheckDate = new Date(lastUpdatedDate);
              nextCheckDate.setDate(lastUpdatedDate.getDate() + ingredient.daysBeforeCheck);
              const isDue = nextCheckDate <= new Date();
              const availableUnits = getAvailableUnits(ingredient.unit);
              const isEach = ingredient.unit === "each";
              const updateDirections = getUpdateDirectionsHistory(ingredient);

              // Label for unit display: use plural for time units, "pcs" for each, otherwise unit as is
              const unitLabel = isEach
                ? "pcs"
                : timeUnitLabels[ingredient.unit]
                ? timeUnitLabels[ingredient.unit]
                : ingredient.unit;

              return (
                <tr
                  key={ingredient.id || ingredient.name}
                  className={isDue ? "due-check" : ""}
                  ref={(el) => (ingredientRefs.current[ingredient.id] = el)}
                >
                  <td>
                    <div
                      className="ingredient-name"
                      style={{
                        color: updatedIngredientId === ingredient.id ? "orange" : "inherit",
                      }}
                    >
                      <Link to={`/ingredient/${ingredient.id}`}>{ingredient.name}</Link>
                    </div>
                  </td>

                  <td className="indicator-container">
                    <div className="update-indicators">
                      {updateDirections.map((direction, i) => (
                        <div
                          key={i}
                          className={`indicator-circle ${direction ? direction : ""} ${direction ? "filled" : ""}`}
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
                                <option key={unit} value={unit}>
                                  {timeUnitLabels[unit] || unit}
                                </option>
                              ))}
                            </select>
                          )}
                        </div>
                        <button onClick={handleUpdate}>update</button>
                      </div>
                    ) : (
                      <span>
                        {ingredient.price} per {ingredient.quantity} {unitLabel}
                      </span>
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
