import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "./all-products";
import { getProductCost } from "../utils/costCalculations";

const ProductTable = ({ focusedId, onFocusChange }) => {
  const navigate = useNavigate();
  const rowRefs = useRef({});

  // Scroll to last focused product on mount
  useEffect(() => {
    if (focusedId && rowRefs.current[focusedId]) {
      rowRefs.current[focusedId].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [focusedId]);

  const formatAmount = (value) => {
    const num = Number(value);
    return Number.isInteger(num) ? num.toString() : num.toFixed(2);
  };

  const toTitle = (str) =>
    str.replace(/\w\S*/g, (txt) => txt[0].toUpperCase() + txt.slice(1).toLowerCase());

  const groupedProducts = products.reduce((acc, product) => {
    const group = product.group || "Ungrouped";
    (acc[group] ||= []).push(product);
    return acc;
  }, {});

  const sortedGroupKeys = Object.keys(groupedProducts).sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
  );

  sortedGroupKeys.forEach((g) =>
    groupedProducts[g].sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
    )
  );

  return (
    <div className="product-table-container small-text">
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Cost</th>
            <th>Profit</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {sortedGroupKeys.map((groupName) => (
            <React.Fragment key={groupName}>
              <tr className="group-header">
                <td colSpan={5}>{toTitle(groupName)}</td>
              </tr>

              {groupedProducts[groupName].map((product) => {
                const cost = getProductCost(product);
                const updated = getProductCost(product, true);
                const price = product.price ?? 0;
                const profit = price - cost;
                const diff = cost - updated;

                const diffClass =
                  diff > 0 ? "diff-negative" : diff < 0 ? "diff-positive" : "";
                const diffText = diff > 0 ? `+${formatAmount(diff)}` : formatAmount(diff);

                return (
                  <tr
                    key={product.id}
                    ref={(el) => (rowRefs.current[product.id] = el)}
                    className={`clickable-row ${
                      focusedId === product.id ? "focused" : ""
                    }`}
                    tabIndex={0}
                    role="button"
                    aria-label={`View cost breakdown for ${product.name}`}
                    onClick={() => {
                      onFocusChange?.(product.id);
                      navigate(`/product/${product.id}/cost-breakdown`);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onFocusChange?.(product.id);
                        navigate(`/product/${product.id}/cost-breakdown`);
                      }
                    }}
                  >
                    <td>{product.name}</td>
                    <td>{formatAmount(price)}</td>
                    <td>{formatAmount(cost)}</td>
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
