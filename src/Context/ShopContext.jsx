import React, { createContext, useState, useEffect } from "react";
import all_products from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  for (let index = 1; index <= all_products.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  // Cart state with localStorage persistence
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem("shopper_cart");
      return saved ? JSON.parse(saved) : getDefaultCart();
    } catch {
      return getDefaultCart();
    }
  });

  const [cartSizes, setCartSizes] = useState(() => {
    try {
      const saved = localStorage.getItem("shopper_cart_sizes");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Wishlist state with localStorage persistence
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem("shopper_wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Promo code state
  const [appliedPromo, setAppliedPromo] = useState(() => {
    try {
      const saved = localStorage.getItem("shopper_promo");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // User state
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("shopper_user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Modals state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Toast notification state
  const [toast, setToast] = useState(null);

  // Sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem("shopper_cart", JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  useEffect(() => {
    try {
      localStorage.setItem("shopper_cart_sizes", JSON.stringify(cartSizes));
    } catch (e) {
      console.error(e);
    }
  }, [cartSizes]);

  useEffect(() => {
    try {
      localStorage.setItem("shopper_wishlist", JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      if (appliedPromo) {
        localStorage.setItem("shopper_promo", JSON.stringify(appliedPromo));
      } else {
        localStorage.removeItem("shopper_promo");
      }
    } catch (e) {
      console.error(e);
    }
  }, [appliedPromo]);

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem("shopper_user", JSON.stringify(user));
      } else {
        localStorage.removeItem("shopper_user");
      }
    } catch (e) {
      console.error(e);
    }
  }, [user]);

  const showToast = (message, type = "success") => {
    setToast({ id: Date.now(), message, type });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  const addToCart = (itemId, size = "M") => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
    setCartSizes((prev) => ({
      ...prev,
      [itemId]: size,
    }));

    const prod = all_products.find((p) => p.id === Number(itemId));
    showToast(
      `Added "${prod ? prod.name.slice(0, 22) + "..." : "Product"}" (${size}) to Cart!`,
      "success"
    );
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const current = prev[itemId] || 0;
      if (current <= 1) {
        return { ...prev, [itemId]: 0 };
      }
      return { ...prev, [itemId]: current - 1 };
    });
  };

  const deleteFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
    showToast("Item removed from your cart", "info");
  };

  const updateCartQuantity = (itemId, quantity) => {
    const qty = Math.max(0, parseInt(quantity) || 0);
    setCartItems((prev) => ({ ...prev, [itemId]: qty }));
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
    setAppliedPromo(null);
  };

  const toggleWishlist = (itemId) => {
    const idNum = Number(itemId);
    const prod = all_products.find((p) => p.id === idNum);
    if (wishlist.includes(idNum)) {
      setWishlist((prev) => prev.filter((id) => id !== idNum));
      showToast(
        `Removed "${prod ? prod.name.slice(0, 22) + "..." : "Product"}" from Wishlist`,
        "info"
      );
    } else {
      setWishlist((prev) => [...prev, idNum]);
      showToast(
        `Saved "${prod ? prod.name.slice(0, 22) + "..." : "Product"}" to Wishlist!`,
        "success"
      );
    }
  };

  const isWishlisted = (itemId) => {
    return wishlist.includes(Number(itemId));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return Math.round(totalAmount * 100) / 100;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const applyPromoCode = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === "SAVE20" || clean === "SHOP20") {
      setAppliedPromo({ code: clean, percent: 20 });
      showToast("🎉 Promo code applied! 20% discount added.", "success");
      return { success: true, message: "20% discount applied!" };
    } else if (clean === "WELCOME10" || clean === "FIRST10") {
      setAppliedPromo({ code: clean, percent: 10 });
      showToast("🎉 Promo code applied! 10% discount added.", "success");
      return { success: true, message: "10% discount applied!" };
    } else {
      showToast("Invalid promo code. Try SAVE20 or WELCOME10", "error");
      return { success: false, message: "Invalid promo code" };
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    showToast("Promo code removed", "info");
  };

  const loginUser = (name, email) => {
    const newUser = {
      name: name || "Valued Shopper",
      email: email || "user@shopper.com",
      loggedIn: true,
    };
    setUser(newUser);
    showToast(`Welcome back, ${newUser.name}!`, "success");
  };

  const logoutUser = () => {
    setUser(null);
    showToast("You have been signed out.", "info");
  };

  const contextValue = {
    all_products,
    cartItems,
    cartSizes,
    wishlist,
    searchQuery,
    setSearchQuery,
    toast,
    showToast,
    addToCart,
    removeFromCart,
    deleteFromCart,
    updateCartQuantity,
    clearCart,
    toggleWishlist,
    isWishlisted,
    getTotalCartAmount,
    getTotalCartItems,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    isCheckoutOpen,
    setIsCheckoutOpen,
    isWishlistOpen,
    setIsWishlistOpen,
    user,
    loginUser,
    logoutUser,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;