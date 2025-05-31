import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "./all-products";
import { getProductCost } from "../utils/costCalculations";

const ProductTable = () => {
  const navigate = useNavigate();

  return (
    <div className="product-table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Cost</th>
            <th scope="col">Price</th>
            <th scope="col">Profit</th>
            <th scope="col">Change</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => {
            const cost = getProductCost(product);
            const profit = product.price - cost;

            return (
              <tr key={product.id || idx}>
                <td>{product.name}</td>
                <td
                  className="clickable"
                  onClick={() => navigate(`/product/${product.id}/cost-breakdown`)}
                  title="View cost breakdown"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      navigate(`/product/${product.id}/cost-breakdown`);
                    }
                  }}
                >
                  ₱{cost.toFixed(2)}
                </td>
                <td>₱{product.price.toFixed(2)}</td>
                <td>₱{profit.toFixed(2)}</td>
                <td>-</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
