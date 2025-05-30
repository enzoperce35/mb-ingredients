// src/utils/scaledPrice.js
import { convertToBaseUnit } from "./unitConversion"; // we'll extract that too

export function getScaledPrice(update, baseQtyRaw, baseUnit) {
  const updateQty = Number(update.quantity);
  if (!baseQtyRaw || !updateQty || !baseUnit || !update.unit) return null;

  const { quantity: baseQty, unit: baseBase } = convertToBaseUnit(baseQtyRaw, baseUnit);
  const { quantity: updateQtyConv, unit: updateBase } = convertToBaseUnit(updateQty, update.unit);

  if (baseBase !== updateBase || updateQtyConv === 0) return null;

  return (update.price / updateQtyConv) * baseQty;
}
