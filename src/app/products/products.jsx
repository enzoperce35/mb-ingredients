import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "./all-products";
import { getProductCost } from "../utils/costCalculations";

const ProductTable = () => {
  const navigate = useNavigate();

  const formatAmount = (value) => {
    return Number(value) % 1 === 0 ? Number(value).toString() : value.toFixed(2);
  };

  // Group and sort products
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
            <th>Name</th>
            <th>Price</th> {/* moved here */}
            <th>Cost</th>  {/* moved after price */}
            <th>Profit</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {sortedGroupKeys.map((groupName) => (
            <React.Fragment key={groupName}>
              <tr className="group-header">
                <td colSpan="5">{groupName}</td>
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

                const diffText = diff > 0 ? `+${formatAmount(diff)}` : formatAmount(diff);

                return (
                  <tr
                    key={product.id || `${groupName}-${idx}`}
                    className="clickable-row"
                    tabIndex={0}
                    role="button"
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
                    <td>{formatAmount(price)}</td> {/* moved here */}
                    <td>{formatAmount(cost)}</td>  {/* moved here */}
                    <td>{formatAmount(profit)}</td>
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
