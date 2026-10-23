import React, { useState, useContext, useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  X,
  Menu,
  LogOut,
  ChevronRight,
} from "lucide-react";

const Navbar = () => {
  const {
    getTotalCartItems,
    wishlist,
    all_products,
    user,
    logoutUser,
    setIsWishlistOpen,
  } = useContext(ShopContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const [navSearch, setNavSearch] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const currentPath = location.pathname;

  // Filter products for quick search preview
  const searchResults = navSearch.trim()
    ? all_products
        .filter((item) =>
          item.name.toLowerCase().includes(navSearch.toLowerCase()) ||
          item.category.toLowerCase().includes(navSearch.toLowerCase())
        )
        .slice(0, 5)
    : [];

  // Close search preview on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const totalCartCount = getTotalCartItems();
  const totalWishlistCount = wishlist.length;

  const handleSearchResultClick = (id) => {
    setNavSearch("");
    setIsSearchFocused(false);
    navigate(`/product/${id}`);
  };

  return (
    <header className="navbar_header">
      {/* Main Navbar */}
      <nav className="navbar_main">
        <div className="navbar_container">
          {/* Mobile Menu Toggle Button */}
          <button
            className="navbar_mobile_btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Brand Logo */}
          <Link to="/" className="navbar_logo" onClick={() => setMenuOpen(false)}>
            <div className="logo_icon_wrap">
              <img src={logo} alt="Shopper Logo" />
            </div>
            <div className="logo_text_wrap">
              <span className="logo_title">SHOPPER</span>
              <span className="logo_subtitle">FASHION & LUXURY</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <ul className={`navbar_links ${menuOpen ? "open" : ""}`}>
            <li className={currentPath === "/" ? "active" : ""}>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className={currentPath === "/men" ? "active" : ""}>
              <Link to="/men" onClick={() => setMenuOpen(false)}>
                Men
              </Link>
            </li>
            <li className={currentPath === "/women" ? "active" : ""}>
              <Link to="/women" onClick={() => setMenuOpen(false)}>
                Women
              </Link>
            </li>
            <li className={currentPath === "/kids" ? "active" : ""}>
              <Link to="/kids" onClick={() => setMenuOpen(false)}>
                Kids
              </Link>
            </li>
          </ul>

          {/* Live Search Bar */}
          <div className="navbar_search" ref={searchRef}>
            <div className={`search_input_wrap ${isSearchFocused ? "focused" : ""}`}>
              <Search size={18} className="search_icon" />
              <input
                type="text"
                placeholder="Search styles, categories..."
                value={navSearch}
                onChange={(e) => setNavSearch(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
              />
              {navSearch && (
                <button
                  className="search_clear"
                  onClick={() => setNavSearch("")}
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Quick Live Search Results Dropdown */}
            {isSearchFocused && navSearch.trim() && (
              <div className="search_dropdown">
                {searchResults.length > 0 ? (
                  <>
                    <div className="search_dropdown_header">
                      <span>Matching Products ({searchResults.length})</span>
                    </div>
                    {searchResults.map((item) => (
                      <div
                        key={item.id}
                        className="search_dropdown_item"
                        onClick={() => handleSearchResultClick(item.id)}
                      >
                        <img src={item.image} alt={item.name} />
                        <div className="search_item_info">
                          <p className="search_item_title">{item.name}</p>
                          <div className="search_item_meta">
                            <span className="search_item_category">{item.category}</span>
                            <span className="search_item_price">${item.new_price}</span>
                          </div>
                        </div>
                        <ChevronRight size={16} className="search_arrow" />
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="search_no_results">
                    <p>No products found for "{navSearch}"</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Action Icons */}
          <div className="navbar_actions">
            {/* Wishlist Button */}
            <button
              className="action_btn wishlist_btn"
              onClick={() => setIsWishlistOpen(true)}
              title="View Wishlist"
              aria-label="Wishlist"
            >
              <Heart size={21} />
              {totalWishlistCount > 0 && (
                <span className="badge_count">{totalWishlistCount}</span>
              )}
            </button>

            {/* Shopping Cart Button */}
            <Link to="/cart" className="action_btn cart_btn" title="View Cart">
              <ShoppingCart size={21} />
              {totalCartCount > 0 && (
                <span className="badge_count cart_badge">{totalCartCount}</span>
              )}
            </Link>

            {/* User Profile or Login */}
            {user ? (
              <div className="user_profile_container">
                <button
                  className="user_profile_btn"
                  onClick={() => setUserDropdown(!userDropdown)}
                >
                  <div className="user_avatar">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="user_name">{user.name.split(" ")[0]}</span>
                </button>
                {userDropdown && (
                  <div className="user_dropdown_menu">
                    <div className="user_dropdown_header">
                      <strong>{user.name}</strong>
                      <span>{user.email}</span>
                    </div>
                    <button
                      className="user_logout_btn"
                      onClick={() => {
                        logoutUser();
                        setUserDropdown(false);
                      }}
                    >
                      <LogOut size={16} /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="login_btn_primary">
                <User size={17} />
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;