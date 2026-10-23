import React, { useState, useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";
import {
  Star,
  ShoppingBag,
  Heart,
  Truck,
  RotateCcw,
  ShieldCheck,
  Check,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductDisplay = ({ product }) => {
  const { addToCart, toggleWishlist, isWishlisted, setIsCheckoutOpen } =
    useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product?.image);
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="product_not_found">
        <h2>Product Not Found</h2>
        <p>The product you are looking for does not exist or has been removed.</p>
        <button onClick={() => navigate("/")} className="btn_back_home">
          Return to Shop
        </button>
      </div>
    );
  }

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const wishlisted = isWishlisted(product.id);

  const discountPercent =
    product.old_price && product.old_price > product.new_price
      ? Math.round(
          ((product.old_price - product.new_price) / product.old_price) * 100
        )
      : null;

  const savingsAmount =
    product.old_price && product.old_price > product.new_price
      ? (product.old_price - product.new_price).toFixed(2)
      : null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product.id, selectedSize);
    }
  };

  const handleBuyNow = () => {
    addToCart(product.id, selectedSize);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="product_display_container">
      <div className="product_display_wrapper">
        {/* Left: Gallery Column */}
        <div className="product_display_gallery">
          <div className="thumbnail_column">
            {[1, 2, 3, 4].map((idx) => (
              <div
                key={idx}
                className={`thumbnail_item ${
                  activeImage === product.image ? "active" : ""
                }`}
                onClick={() => setActiveImage(product.image)}
              >
                <img src={product.image} alt={`Angle ${idx}`} />
              </div>
            ))}
          </div>

          <div className="main_image_wrap">
            <img
              src={activeImage || product.image}
              alt={product.name}
              className="main_product_image"
            />
            {discountPercent && (
              <span className="product_main_discount">-{discountPercent}%</span>
            )}
          </div>
        </div>

        {/* Right: Info & Purchase Column */}
        <div className="product_display_info">
          {/* Category Pill & Stock Status */}
          <div className="product_meta_header">
            <span className="product_category_tag">{product.category}</span>
            <span className="product_stock_badge">
              <span className="stock_dot"></span> In Stock • Ships Today
            </span>
          </div>

          <h1 className="product_title">{product.name}</h1>

          {/* Rating */}
          <div className="product_rating_row">
            <div className="stars_wrap">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <span className="rating_num">4.9</span>
            <span className="review_count">(142 Customer Reviews)</span>
          </div>

          {/* Pricing */}
          <div className="product_pricing_box">
            <div className="prices_line">
              <span className="price_large">${product.new_price.toFixed(2)}</span>
              {product.old_price && (
                <span className="price_strike">
                  ${product.old_price.toFixed(2)}
                </span>
              )}
            </div>
            {savingsAmount && (
              <div className="savings_tag">
                Save ${savingsAmount} ({discountPercent}% OFF)
              </div>
            )}
          </div>

          <p className="product_excerpt">
            Expertly crafted with a breathable luxury blend, this piece offers a
            flattering silhouette, superior comfort, and durable construction
            designed to endure daily wear while looking effortlessly refined.
          </p>

          {/* Size Selector */}
          <div className="product_size_section">
            <div className="size_header">
              <span className="option_label">Select Size:</span>
              <span className="size_selected_text">{selectedSize}</span>
            </div>
            <div className="size_buttons_wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size_btn ${selectedSize === size ? "active" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Actions */}
          <div className="product_actions_row">
            <div className="quantity_counter">
              <button
                className="qty_btn"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                -
              </button>
              <span className="qty_val">{quantity}</span>
              <button className="qty_btn" onClick={() => setQuantity((q) => q + 1)}>
                +
              </button>
            </div>

            <button className="btn_add_to_cart" onClick={handleAddToCart}>
              <ShoppingBag size={18} />
              <span>Add to Cart</span>
            </button>

            <button
              className={`btn_wishlist_square ${wishlisted ? "active" : ""}`}
              onClick={() => toggleWishlist(product.id)}
              title={wishlisted ? "Remove from wishlist" : "Save to wishlist"}
            >
              <Heart size={20} fill={wishlisted ? "#f43f5e" : "transparent"} />
            </button>
          </div>

          {/* Instant Buy Now Button */}
          <button className="btn_buy_now" onClick={handleBuyNow}>
            <Zap size={18} />
            <span>Buy Now (Express Checkout)</span>
          </button>

          {/* Value Guarantees */}
          <div className="product_guarantees">
            <div className="guarantee_item">
              <Truck size={18} className="guarantee_icon" />
              <span>Free standard delivery on orders over $75</span>
            </div>
            <div className="guarantee_item">
              <RotateCcw size={18} className="guarantee_icon" />
              <span>30-Day returns & hassle-free size exchange</span>
            </div>
            <div className="guarantee_item">
              <ShieldCheck size={18} className="guarantee_icon" />
              <span>100% Genuine product guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
