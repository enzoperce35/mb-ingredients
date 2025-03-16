import './App.css';
import { ingredients } from './ingredients';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IngredientDetail from './IngredientDetail';

function App() {
  // Sorting: Move due items to the top
  const sortedIngredients = [...ingredients].sort((a, b) => {
    const now = new Date();
    const aDue = new Date(a.lastUpdated);
    aDue.setDate(aDue.getDate() + a.daysBeforeCheck);
    
    const bDue = new Date(b.lastUpdated);
    bDue.setDate(bDue.getDate() + b.daysBeforeCheck);

    return aDue < now && bDue >= now ? -1 : bDue < now && aDue >= now ? 1 : 0;
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Ingredient</th>
                      <th>Updates</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    {sortedIngredients.map((ingredient) => {
                      const lastUpdatedDate = new Date(ingredient.lastUpdated);
                      const nextCheckDate = new Date(lastUpdatedDate);
                      nextCheckDate.setDate(lastUpdatedDate.getDate() + ingredient.daysBeforeCheck);
                      const isDue = nextCheckDate <= new Date();

                      return (
                        <tr
                          key={ingredient.id || ingredient.name}
                          className={isDue ? 'due-check' : ''}
                        >
                          <td>
                            <Link to={`/ingredient/${ingredient.id}`}>{ingredient.name}</Link>
                          </td>
                          <td>
                            <div className="update-indicators">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  style={{ backgroundColor: i < ingredient.updateLevel ? 'green' : '#ccc' }}
                                ></div>
                              ))}
                            </div>
                          </td>
                          <td>
                            <span>{ingredient.price} per {ingredient.quantity} {ingredient.unit}</span>
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
