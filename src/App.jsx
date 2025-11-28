import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import OrderSuccess from "./pages/OrderSuccess";
import ProductDetails from "./pages/ProductDetails"; // Correct path

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />

      <div style={{ marginTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/products"
            element={<Products addToCart={addToCart} />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetails addToCart={addToCart} />}
          />

          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />

          <Route
            path="/checkout"
            element={<Checkout cartItems={cart} setCart={setCart} />}
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="/order-success" element={<OrderSuccess />} />

          

          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
