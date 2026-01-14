import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

function CartPage() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    totalItems,
    deductFromCart,
    addToCart,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex items-center justify-center h-[60vh] flex-col">
        <h2>Tu carrito está vacío </h2>
        <p>Agrega tus productos y vendrán aquí</p>
        <Link to="/products">Dirigirse a productos</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Cart ({totalItems} products)</h1>

      <ul className="flex flex-col gap-6">
        {cartItems.map((item) => (
          <li key={item.id}>
            <div className="flex items-center shadow-md p-4 bg-stone-50">
              <div>
                <img src={item.thumbnail} alt="" />
              </div>
              <div className="flex flex-1 flex-col">
                <h3 className="font-semibold">{item.title}</h3>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="flex gap-2 items-center shrink-0 mr-4">
                <button
                  className={`w-8 h-8 rounded-full bg-stone-100 shadow-sm hover:bg-stone-200 transform transition duration-300 hover:scale-125 hover:cursor-pointer`}
                  onClick={() => deductFromCart(item.id)}
                >
                  -
                </button>
                <button
                  className={`w-8 h-8 rounded-full bg-stone-100 shadow-sm hover:bg-stone-200 transform transition duration-300 hover:scale-125 hover:cursor-pointer`}
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
                <button
                  className={`text-red-500 transform transition duration-300 hover:scale-110 hover:cursor-pointer`}
                  onClick={() => removeFromCart(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={clearCart}
          className=" bg-black text-white px-4 py-2 rounded"
        >
          Empty cart
        </button>
        <span>Total ${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default CartPage;
