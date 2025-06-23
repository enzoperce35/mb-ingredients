import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "./all-products";
import { getProductCost } from "../utils/costCalculations";

const ProductTable = () => {
  const navigate = useNavigate();

  // Group products by 'group' and sort both groups and items alphabetically
  const groupedProducts = products.reduce((acc, product) => {
    const group = product.group || "Ungrouped";
    if (!acc[group]) acc[group] = [];
    acc[group].push(product);
    return acc;
  }, {});

  const sortedGroupKeys = Object.keys(groupedProducts).sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
  );

  sortedGroupKeys.forEach((group) => {
    groupedProducts[group].sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
    );
  });

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
          {sortedGroupKeys.map((groupName) => (
            <React.Fragment key={groupName}>
              <tr className="group-header">
                <td colSpan="5" style={{ fontWeight: "bold", paddingTop: "1rem" }}>
                  {groupName}
                </td>
              </tr>
              {groupedProducts[groupName].map((product, idx) => {
                const cost = getProductCost(product);
                const updated = getProductCost(product, true);
                const price = product.price ?? 0;
                const profit = price - cost;
                const diff = cost - updated;

                let diffClass = "";
                if (diff > 0) diffClass = "diff-positive";
                else if (diff < 0) diffClass = "diff-negative";

                const diffText = diff > 0 ? `+${diff.toFixed(2)}` : `${diff.toFixed(2)}`;

                return (
                  <tr
                    key={product.id || `${groupName}-${idx}`}
                    className="clickable-row"
                    tabIndex={0}
                    role="link"
                    aria-label={`View cost breakdown for ${product.name}`}
                    onClick={() => navigate(`/product/${product.id}/cost-breakdown`)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        navigate(`/product/${product.id}/cost-breakdown`);
                      }
                    }}
                  >
                    <td>{product.name}</td>
                    <td>₱{cost.toFixed(2)}</td>
                    <td>₱{price.toFixed(2)}</td>
                    <td>₱{profit.toFixed(2)}</td>
                    <td className={diffClass}>{diffText}</td>
                  </tr>
                );
              })}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
