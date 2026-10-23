import React, { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import {
  Trash2,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Tag,
  CheckCircle2,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";
import { Link } from "react-router-dom";

const CartItems = () => {
  const {
    all_products,
    cartItems,
    cartSizes,
    addToCart,
    removeFromCart,
    deleteFromCart,
    clearCart,
    getTotalCartAmount,
    getTotalCartItems,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
    setIsCheckoutOpen,
  } = useContext(ShopContext);

  const [promoInput, setPromoInput] = useState("");

  const totalItems = getTotalCartItems();
  const subtotal = getTotalCartAmount();
  const isFreeShipping = subtotal >= 75 || subtotal === 0;
  const shippingFee = isFreeShipping ? 0 : 10;
  
  // Discount from promo code
  const discountAmount = appliedPromo
    ? Math.round((subtotal * appliedPromo.percent) / 100 * 100) / 100
    : 0;

  const totalAmount = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoInput.trim()) {
      applyPromoCode(promoInput);
      setPromoInput("");
    }
  };

  // If cart is empty
  if (totalItems === 0) {
    return (
      <div className="cart_empty_container">
        <div className="cart_empty_card">
          <div className="cart_empty_icon_circle">
            <ShoppingBag size={48} />
          </div>
          <h2>Your Shopping Bag is Empty</h2>
          <p>
            Looks like you haven't added anything to your cart yet. Explore our
            freshest arrivals and curated collections!
          </p>
          <div className="empty_promo_hint">
            <Sparkles size={16} />
            <span>Tip: Use code <strong>SAVE20</strong> at checkout for 20% off!</span>
          </div>
          <Link to="/" className="btn_start_shopping">
            <span>Explore Collections</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart_items_section">
      <div className="cart_items_container">
        <div className="cart_header_title_row">
          <h1>Shopping Bag</h1>
          <span className="cart_item_count_label">({totalItems} items)</span>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="free_shipping_meter">
          {subtotal >= 75 ? (
            <div className="meter_text success">
              <CheckCircle2 size={16} />
              <span>🎉 Congratulations! You unlocked <strong>FREE Express Shipping</strong>!</span>
            </div>
          ) : (
            <div className="meter_text">
              <span>
                Add <strong>${(75 - subtotal).toFixed(2)}</strong> more to qualify for <strong>FREE Shipping</strong>!
              </span>
            </div>
          )}
          <div className="meter_bar_bg">
            <div
              className="meter_bar_fill"
              style={{ width: `${Math.min(100, (subtotal / 75) * 100)}%` }}
            ></div>
          </div>
        </div>

        {/* 2-Column Grid: Left is Table, Right is Order Summary */}
        <div className="cart_main_grid">
          {/* Left: Products List */}
          <div className="cart_products_col">
            <div className="cart_table_header">
              <span>Product</span>
              <span>Details</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span></span>
            </div>

            <div className="cart_items_list">
              {all_products.map((item) => {
                const qty = cartItems[item.id] || 0;
                if (qty <= 0) return null;
                const size = cartSizes[item.id] || "M";

                return (
                  <div key={item.id} className="cart_item_row">
                    {/* Image */}
                    <Link to={`/product/${item.id}`} className="cart_item_img_wrap">
                      <img src={item.image} alt={item.name} />
                    </Link>

                    {/* Details */}
                    <div className="cart_item_details">
                      <Link to={`/product/${item.id}`} className="cart_item_name">
                        {item.name}
                      </Link>
                      <div className="cart_item_meta">
                        <span className="cart_size_pill">Size: {size}</span>
                        <span className="cart_cat_pill">{item.category}</span>
                      </div>
                    </div>

                    {/* Unit Price */}
                    <div className="cart_item_unit_price">
                      ${item.new_price.toFixed(2)}
                    </div>

                    {/* Quantity controls */}
                    <div className="cart_item_qty_controls">
                      <button
                        className="qty_btn"
                        onClick={() => removeFromCart(item.id)}
                        title="Decrease"
                      >
                        -
                      </button>
                      <span className="qty_num">{qty}</span>
                      <button
                        className="qty_btn"
                        onClick={() => addToCart(item.id, size)}
                        title="Increase"
                      >
                        +
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="cart_item_subtotal">
                      ${(item.new_price * qty).toFixed(2)}
                    </div>

                    {/* Remove */}
                    <div className="cart_item_remove">
                      <button
                        onClick={() => deleteFromCart(item.id)}
                        className="btn_remove_item"
                        title="Remove product"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cart_bottom_actions">
              <Link to="/" className="btn_continue_shopping">
                ← Continue Shopping
              </Link>
              <button onClick={clearCart} className="btn_clear_cart">
                Clear Cart
              </button>
            </div>
          </div>

          {/* Right: Order Summary Card */}
          <div className="cart_summary_col">
            <div className="order_summary_card">
              <h3>Order Summary</h3>

              {/* Promo Code Input */}
              <div className="promo_box">
                {appliedPromo ? (
                  <div className="applied_promo_badge">
                    <div className="applied_promo_info">
                      <Tag size={16} />
                      <span>
                        Code <strong>{appliedPromo.code}</strong> applied ({appliedPromo.percent}% OFF)
                      </span>
                    </div>
                    <button
                      className="remove_promo_btn"
                      onClick={removePromoCode}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyPromo} className="promo_form">
                    <div className="promo_input_wrap">
                      <Tag size={16} className="promo_icon" />
                      <input
                        type="text"
                        placeholder="Promo Code (e.g. SAVE20)"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="promo_apply_btn">
                      Apply
                    </button>
                  </form>
                )}
              </div>

              {/* Calculation Breakdown */}
              <div className="summary_breakdown">
                <div className="summary_row">
                  <span>Bag Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                {appliedPromo && (
                  <div className="summary_row discount">
                    <span>Discount ({appliedPromo.percent}%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="summary_row">
                  <span>Estimated Shipping</span>
                  <span>{isFreeShipping ? <strong className="free_badge">FREE</strong> : `$${shippingFee.toFixed(2)}`}</span>
                </div>

                <div className="summary_divider"></div>

                <div className="summary_row total">
                  <span>Total Due</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                className="btn_proceed_checkout"
                onClick={() => setIsCheckoutOpen(true)}
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={18} />
              </button>

              {/* Guarantees */}
              <div className="checkout_trust_notes">
                <div className="trust_note">
                  <ShieldCheck size={16} />
                  <span>Bank-grade 256-bit SSL encrypted checkout</span>
                </div>
                <div className="trust_note">
                  <RotateCcw size={16} />
                  <span>30-Day Money Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
