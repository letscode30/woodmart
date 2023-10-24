import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import ProductSearch from "./components/ProductSearch";
import { topCategories } from "./data";

const App = () => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const [searchData, setSearchData] = useState("");

  let [filteredProducts, setFilteredProducts] = useState([]);

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

  const handleSearch = (data) => {
    if (!data) {
      setFilteredProducts([]); // Return an empty array when no search text is provided
    } else {
      filteredProducts = topCategories.filter((product) =>
        product.type.toLowerCase().includes(data.toLowerCase())
      );
      setFilteredProducts(filteredProducts);
    }
  };

  return (
    <>
      <Navbar size={cart.length} onSearch={handleSearch} />
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

        <Route
          path="/productSearch"
          element={<ProductSearch filteredProducts={filteredProducts} />}
        />

        {/* <Route
          path="/ProductSearch/${filteredProducts}"
          element={<ProductSearch />}
        />*/}
      </Routes>

      <Footer />

      {warning && <div>Item is already added in cart</div>}
    </>
  );
};

export default App;
