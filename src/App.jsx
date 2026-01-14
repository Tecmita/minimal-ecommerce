import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import { CartProvider } from "./context/CartContext.jsx";
import ProductPage from "./pages//ProductPage";
import CartPage from "./pages/CartPage.jsx";
import HistoryProvider from "./context/HistoryProvider";
import Layout from "./components/Layout.jsx";
import SearchProvider from "./context/SearchContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <HistoryProvider>
          <CartProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Navigate to="/products" />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductPage />}></Route>
                <Route path="/cart" element={<CartPage />}></Route>
              </Route>
            </Routes>
          </CartProvider>
        </HistoryProvider>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
