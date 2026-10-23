import React, { useState, useContext } from "react";
import "./CheckoutModal.css";
import { ShopContext } from "../../Context/ShopContext";
import {
  X,
  CreditCard,
  Truck,
  CheckCircle2,
  Lock,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const CheckoutModal = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    getTotalCartAmount,
    appliedPromo,
    clearCart,
    showToast,
  } = useContext(ShopContext);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    paymentMethod: "card",
    cardNumber: "4242 •••• •••• 4242",
    cardExp: "12/28",
    cardCvc: "888",
  });
  const [orderId, setOrderId] = useState("");

  if (!isCheckoutOpen) return null;

  const subtotal = getTotalCartAmount();
  const shippingFee = subtotal >= 75 ? 0 : 10;
  const discountAmount = appliedPromo
    ? Math.round((subtotal * appliedPromo.percent) / 100 * 100) / 100
    : 0;
  const totalDue = Math.max(0, subtotal - discountAmount + shippingFee);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.fullName || !formData.email || !formData.address) {
        showToast("Please fill out all required shipping fields", "error");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      // Simulate order processing
      const genId = "SHP-" + Math.floor(100000 + Math.random() * 900000);
      setOrderId(genId);
      setStep(3);
      clearCart();
      showToast("🎉 Order placed successfully! Check your email confirmation.", "success");
    }
  };

  const handleFinish = () => {
    setIsCheckoutOpen(false);
    setStep(1);
  };

  return (
    <div className="checkout_overlay" onClick={() => setIsCheckoutOpen(false)}>
      <div
        className="checkout_modal_container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="checkout_modal_header">
          <div className="checkout_header_info">
            <Lock size={18} className="lock_icon" />
            <h3>Secure Fast Checkout</h3>
          </div>
          <button
            className="checkout_close_btn"
            onClick={() => setIsCheckoutOpen(false)}
            aria-label="Close checkout"
          >
            <X size={20} />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 3 && (
          <div className="checkout_steps_bar">
            <div className={`step_item ${step >= 1 ? "active" : ""}`}>
              <div className="step_circle">1</div>
              <span>Shipping</span>
            </div>
            <div className="step_line"></div>
            <div className={`step_item ${step >= 2 ? "active" : ""}`}>
              <div className="step_circle">2</div>
              <span>Payment</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="checkout_modal_body">
          {step === 1 && (
            <form onSubmit={handleNextStep} className="checkout_form">
              <h4>Shipping Details</h4>
              <div className="form_group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="e.g. Alex Morgan"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form_group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form_group">
                <label>Street Address *</label>
                <input
                  type="text"
                  name="address"
                  placeholder="123 Fashion Blvd, Apt 4B"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form_row_2">
                <div className="form_group">
                  <label>City *</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="New York"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form_group">
                  <label>Postal / Zip Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="10001"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="checkout_summary_preview">
                <span>Total Due:</span>
                <strong>${totalDue.toFixed(2)}</strong>
              </div>

              <button type="submit" className="btn_step_next">
                <span>Continue to Payment</span>
                <ArrowRight size={17} />
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNextStep} className="checkout_form">
              <h4>Select Payment Method</h4>

              <div className="payment_methods_selector">
                <label
                  className={`payment_radio_card ${
                    formData.paymentMethod === "card" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={handleChange}
                  />
                  <CreditCard size={20} />
                  <span>Credit / Debit Card</span>
                </label>

                <label
                  className={`payment_radio_card ${
                    formData.paymentMethod === "cod" ? "selected" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={handleChange}
                  />
                  <Truck size={20} />
                  <span>Cash on Delivery</span>
                </label>
              </div>

              {formData.paymentMethod === "card" && (
                <div className="card_details_box">
                  <div className="form_group">
                    <label>Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="4242 4242 4242 4242"
                    />
                  </div>
                  <div className="form_row_2">
                    <div className="form_group">
                      <label>Expires</label>
                      <input
                        type="text"
                        name="cardExp"
                        value={formData.cardExp}
                        onChange={handleChange}
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="form_group">
                      <label>CVC / CVV</label>
                      <input
                        type="text"
                        name="cardCvc"
                        value={formData.cardCvc}
                        onChange={handleChange}
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="checkout_summary_preview">
                <div>
                  <small>Shipping to: {formData.city || "New York"}</small>
                  <br />
                  <span>Total Due:</span>
                </div>
                <strong>${totalDue.toFixed(2)}</strong>
              </div>

              <div className="step2_actions">
                <button
                  type="button"
                  className="btn_step_back"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
                <button type="submit" className="btn_place_order">
                  <ShieldCheck size={18} />
                  <span>Place Order (${totalDue.toFixed(2)})</span>
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="order_success_box animate-fade-in">
              <div className="success_icon_ring">
                <CheckCircle2 size={54} color="#10b981" />
              </div>
              <h2>Order Confirmed!</h2>
              <p className="order_thank_you">
                Thank you for your order, <strong>{formData.fullName || "Shopper"}</strong>! We have received your order and our team is preparing it for shipment.
              </p>

              <div className="order_receipt_card">
                <div className="receipt_row">
                  <span>Order Reference:</span>
                  <strong>{orderId}</strong>
                </div>
                <div className="receipt_row">
                  <span>Estimated Delivery:</span>
                  <span>3-5 Business Days</span>
                </div>
                <div className="receipt_row">
                  <span>Amount Paid:</span>
                  <strong>${totalDue.toFixed(2)}</strong>
                </div>
                <div className="receipt_row">
                  <span>Confirmation Sent To:</span>
                  <span>{formData.email}</span>
                </div>
              </div>

              <button className="btn_order_done" onClick={handleFinish}>
                <span>Continue Shopping</span>
                <Sparkles size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
