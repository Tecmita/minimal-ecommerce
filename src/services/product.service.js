export const getProducts = async ({ limit, skip }) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  if (!res.ok) {
    throw new Error("Ocurrió un error");
  }
  return res.json();
};
export const getProductsbyId = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error(`Producto no encontrado`);
  }
  return res.json();
};
