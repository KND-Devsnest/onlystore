export const checkIfValidCartValue = (maxStock, currentPrice) => {
  if (currentPrice < 1) {
    return 1;
  }
  if (currentPrice > maxStock) {
    return maxStock;
  }
  return currentPrice;
};
