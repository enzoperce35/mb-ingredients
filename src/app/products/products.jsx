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
            const updated = getProductCost(product, true);
            const profit = product.price - cost;
            const diff = cost - updated  ;

            let diffClass = "";
            if (diff > 0) diffClass = "diff-positive";
            else if (diff < 0) diffClass = "diff-negative";

            const diffText = diff > 0 ? `+${diff.toFixed(2)}` : `${diff.toFixed(2)}`;

            return (
              <tr
                key={product.id || idx}
                className="clickable-row"
                tabIndex={0}
                role="button"
                title="View cost breakdown"
                onClick={() => navigate(`/product/${product.id}/cost-breakdown`)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate(`/product/${product.id}/cost-breakdown`);
                  }
                }}
              >
                <td>{product.name}</td>
                <td>₱{cost.toFixed(2)}</td>
                <td>₱{product.price.toFixed(2)}</td>
                <td>₱{profit.toFixed(2)}</td>
                <td className={diffClass}>{diffText}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
