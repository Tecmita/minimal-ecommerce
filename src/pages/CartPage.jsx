import { useCart } from "../context/CartContext.jsx";

function CartPage() {
  const { cartItems, removeFromCart, clearCart, totalItems } = useCart();

  console.log("CART ITEMS:", cartItems);
  if (cartItems.length === 0) {
    return <h2>Tu carrito está vacío</h2>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Carrito ({totalItems} items)</h1>

      <ul className="flex flex-col gap-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border p-4 rounded"
          >
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p>${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={clearCart}
        className="mt-6 bg-black text-white px-4 py-2 rounded"
      >
        Vaciar carrito
      </button>
    </div>
  );
}

export default CartPage;
