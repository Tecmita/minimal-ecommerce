import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import ProductsPage from "./pages/ProductsPage";
import { CartProvider } from "./context/CartContext.jsx";
import ProductPage from "./pages//ProductPage";
import CartPage from "./pages/CartPage.jsx";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
