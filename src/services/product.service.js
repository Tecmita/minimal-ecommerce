export const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Ocurrió un error");
  }
  const data = await res.json();
  return data.products;
};
