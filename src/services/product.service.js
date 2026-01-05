export const getProducts = async ({ limit, skip }) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  if (!res.ok) {
    throw new Error("Ocurrió un error");
  }
  return res.json();
};
