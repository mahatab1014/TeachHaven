const getStoredProductItems = () => {
  const storedProducts = localStorage.getItem("cart");
  if (storedProducts) {
    return JSON.parse(storedProducts);
  }
  return [];
};

const saveProductLocalStorage = (id) => {
  const storedProducts = getStoredProductItems();
  const exists = storedProducts.find((jobID) => jobID === id);
  if (!exists) {
    storedProducts.push(id);
    localStorage.setItem("cart", JSON.stringify(storedProducts));
  }
};

export { getStoredProductItems, saveProductLocalStorage};
