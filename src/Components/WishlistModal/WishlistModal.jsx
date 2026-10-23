import React, { useContext } from "react";
import "./WishlistModal.css";
import { ShopContext } from "../../Context/ShopContext";
import { X, Heart, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const WishlistModal = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    all_products,
    toggleWishlist,
    addToCart,
  } = useContext(ShopContext);

  if (!isWishlistOpen) return null;

  const wishlistedItems = all_products.filter((item) =>
    wishlist.includes(item.id)
  );

  return (
    <div className="wishlist_overlay" onClick={() => setIsWishlistOpen(false)}>
      <div
        className="wishlist_drawer"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="wishlist_header">
          <div className="wishlist_title_wrap">
            <Heart size={20} className="wishlist_heart_icon" />
            <h3>Your Wishlist</h3>
            <span className="wishlist_count_pill">{wishlist.length}</span>
          </div>
          <button
            className="wishlist_close_btn"
            onClick={() => setIsWishlistOpen(false)}
            aria-label="Close wishlist"
          >
            <X size={20} />
          </button>
        </div>

        <div className="wishlist_body">
          {wishlistedItems.length === 0 ? (
            <div className="wishlist_empty">
              <div className="empty_heart_circle">
                <Heart size={36} />
              </div>
              <h4>Your wishlist is empty</h4>
              <p>Explore our trending catalog and save items you love!</p>
              <button
                className="wishlist_shop_btn"
                onClick={() => setIsWishlistOpen(false)}
              >
                Start Exploring
              </button>
            </div>
          ) : (
            <div className="wishlist_items_list">
              {wishlistedItems.map((item) => (
                <div key={item.id} className="wishlist_item_card">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={() => setIsWishlistOpen(false)}
                    className="wishlist_img_link"
                  >
                    <img src={item.image} alt={item.name} />
                  </Link>

                  <div className="wishlist_item_details">
                    <Link
                      to={`/product/${item.id}`}
                      onClick={() => setIsWishlistOpen(false)}
                      className="wishlist_item_name"
                    >
                      {item.name}
                    </Link>
                    <div className="wishlist_item_pricing">
                      <span className="price_new">${item.new_price}</span>
                      <span className="price_old">${item.old_price}</span>
                    </div>

                    <div className="wishlist_item_actions">
                      <button
                        className="wishlist_add_cart_btn"
                        onClick={() => addToCart(item.id, "M")}
                      >
                        <ShoppingBag size={15} /> Add to Cart
                      </button>
                      <button
                        className="wishlist_remove_btn"
                        onClick={() => toggleWishlist(item.id)}
                        title="Remove from wishlist"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistModal;
