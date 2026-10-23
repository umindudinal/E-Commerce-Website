import React, { useEffect } from "react";
import CartItems from "../Components/CartItems/CartItems";
import Footer from "../Components/Footer/Footer";

const Cart = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="cart_page_layout">
      <CartItems />
      <Footer />
    </div>
  );
};

export default Cart;