import React, { useContext } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { Heart, ShoppingBag, Star } from "lucide-react";

const Item = (props) => {
  const { addToCart, toggleWishlist, isWishlisted } = useContext(ShopContext);

  const discountPercent =
    props.price_old && props.price_old > props.price_new
      ? Math.round(((props.price_old - props.price_new) / props.price_old) * 100)
      : null;

  const wishlisted = isWishlisted(props.id);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(props.id, "M");
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(props.id);
  };

  return (
    <div className="product_card">
      {/* Image & Overlay Area */}
      <div className="product_card_image_wrap">
        <Link to={`/product/${props.id}`}>
          <img
            src={props.image}
            alt={props.name}
            className="product_card_image"
            loading="lazy"
          />
        </Link>

        {/* Badges */}
        <div className="product_badges">
          {discountPercent && (
            <span className="badge_discount">-{discountPercent}%</span>
          )}
          {props.isNew && <span className="badge_new">NEW</span>}
        </div>

        {/* Wishlist Button */}
        <button
          className={`card_wishlist_btn ${wishlisted ? "active" : ""}`}
          onClick={handleWishlistClick}
          aria-label="Save to Wishlist"
          title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={18} fill={wishlisted ? "#f43f5e" : "transparent"} />
        </button>

        {/* Quick Add To Cart Button */}
        <button
          className="quick_add_btn"
          onClick={handleQuickAdd}
          title="Quick Add to Cart"
        >
          <ShoppingBag size={16} />
          <span>Quick Add</span>
        </button>
      </div>

      {/* Product Content Details */}
      <div className="product_card_info">
        <div className="product_card_rating">
          <div className="stars_row">
            <Star size={13} fill="#f59e0b" color="#f59e0b" />
            <Star size={13} fill="#f59e0b" color="#f59e0b" />
            <Star size={13} fill="#f59e0b" color="#f59e0b" />
            <Star size={13} fill="#f59e0b" color="#f59e0b" />
            <Star size={13} fill="#f59e0b" color="#f59e0b" />
          </div>
          <span className="rating_text">4.9 (48)</span>
        </div>

        <h3 className="product_card_title">
          <Link to={`/product/${props.id}`}>{props.name}</Link>
        </h3>

        <div className="product_card_footer">
          <div className="product_card_prices">
            <span className="price_current">${props.price_new.toFixed(2)}</span>
            {props.price_old && (
              <span className="price_original">${props.price_old.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;