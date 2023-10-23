import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (tct) => {
    console.log(tct);

    let isPresent = false;
    cart.forEach((product) => {
      if (tct.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);

      setTimeout(() => {
        setWarning(false);
      }, 2000);

      return;
    }

    setCart([...cart, tct]);
    console.log(cart);
  };

  return (
    <>
      <Navbar size={cart.length} />
      <Routes>
        <Route path="/" element={<Home handleClick={handleClick} />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/categories"
          element={<Categories handleClick={handleClick} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route
          path="/ProductDetail/:id"
          element={<ProductDetail handleClick={handleClick} />}
        />
      </Routes>

      <Footer />

      {warning && <div>Item is already added in cart</div>}
    </>
  );
};

export default App;
