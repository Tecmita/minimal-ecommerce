export const getProducts = async ({ limit, skip, signal }) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    { signal }
  );
  if (!res.ok) {
    throw new Error("Ocurrió un error");
  }
  return res.json();
};
export const getProductsbyId = async (id, signal) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, { signal });
  if (!res.ok) {
    throw new Error(`Producto no encontrado`);
  }
  return res.json();
};
export const getProductsByCategory = async (category) => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  if (!res.ok) throw new Error("Error al traer productos");
  return res.json();
};
