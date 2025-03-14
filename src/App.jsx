import './App.css';
import { ingredients } from './ingredients';

function App() {
  return (
    <div className="App">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th scope="col">Ingredient</th>
              <th scope="col">Updates</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map((ingredient) => (
              <tr key={ingredient.id || ingredient.name}> {/* Prefer unique key */}
                <td>{ingredient.name}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
