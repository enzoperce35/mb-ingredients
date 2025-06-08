import { convertToBaseUnit } from "./unitConversion";

export function getScaledPrice(update, baseQtyRaw, baseUnit) {
  const updateQty = Number(update.quantity);
  if (
    baseQtyRaw == null || 
    updateQty == null || 
    !baseUnit || 
    !update.unit ||
    isNaN(updateQty) ||
    isNaN(baseQtyRaw)
  ) {
    return null;
  }

  const { quantity: baseQty, unit: baseBase } = convertToBaseUnit(baseQtyRaw, baseUnit);
  const { quantity: updateQtyConv, unit: updateBase } = convertToBaseUnit(updateQty, update.unit);

  // Units must match for comparison; quantity must be > 0
  if (baseBase !== updateBase || updateQtyConv === 0) return null;

  // Calculate scaled price per base quantity
  return (update.price / updateQtyConv) * baseQty;
}
