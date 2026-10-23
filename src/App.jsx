import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LogiSignuo from "./Pages/LogiSignuo";
import Toast from "./Components/Toast/Toast";
import WishlistModal from "./Components/WishlistModal/WishlistModal";
import CheckoutModal from "./Components/CheckoutModal/CheckoutModal";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";

const App = () => {
  return (
    <div className="app_root_layout">
      {/* Global Interactive Modals & Notifications */}
      <Toast />
      <WishlistModal />
      <CheckoutModal />

      {/* Main Navbar */}
      <Navbar />

      {/* Application Routing */}
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/men"
          element={<ShopCategory banner={men_banner} category="men" />}
        />
        <Route
          path="/women"
          element={<ShopCategory banner={women_banner} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={kids_banner} category="kids" />}
        />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LogiSignuo />} />
      </Routes>
    </div>
  );
};

export default App;