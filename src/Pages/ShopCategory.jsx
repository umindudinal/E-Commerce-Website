import React, { useContext, useState, useEffect } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Item from "../Components/Item/Item.jsx";
import {
  ArrowUpDown,
  Filter,
  Search,
  RotateCcw,
  SlidersHorizontal,
} from "lucide-react";

const ShopCategory = ({ banner, category }) => {
  const { all_products } = useContext(ShopContext);

  const [sortBy, setSortBy] = useState("featured");
  const [priceFilter, setPriceFilter] = useState("all");
  const [catSearch, setCatSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setVisibleCount(8);
    setCatSearch("");
    setPriceFilter("all");
  }, [category]);

  // 1. Filter by category
  let products = all_products.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  // 2. Filter by search query
  if (catSearch.trim()) {
    products = products.filter((item) =>
      item.name.toLowerCase().includes(catSearch.toLowerCase())
    );
  }

  // 3. Filter by price range
  if (priceFilter === "under50") {
    products = products.filter((item) => item.new_price < 50);
  } else if (priceFilter === "50to75") {
    products = products.filter(
      (item) => item.new_price >= 50 && item.new_price <= 75
    );
  } else if (priceFilter === "over75") {
    products = products.filter((item) => item.new_price > 75);
  }

  // 4. Sort products
  if (sortBy === "price-low") {
    products = [...products].sort((a, b) => a.new_price - b.new_price);
  } else if (sortBy === "price-high") {
    products = [...products].sort((a, b) => b.new_price - a.new_price);
  } else if (sortBy === "discount") {
    products = [...products].sort((a, b) => {
      const discA = a.old_price ? (a.old_price - a.new_price) / a.old_price : 0;
      const discB = b.old_price ? (b.old_price - b.new_price) / b.old_price : 0;
      return discB - discA;
    });
  }

  const categoryTitles = {
    men: "Men's Premium Wardrobe",
    women: "Women's Luxury Fashion",
    kids: "Kids & Youth Collection",
  };

  const categoryDescriptions = {
    men: "Discover tailored jackets, modern casuals, and sharp street-ready essentials.",
    women: "Elegant dresses, chic tops, and statement silhouettes for every occasion.",
    kids: "Playful designs, ultra-soft breathable fabrics, and durable daywear.",
  };

  const displayedProducts = products.slice(0, visibleCount);

  return (
    <div className="shop_category_page">
      {/* Category Banner with stylized overlay */}
      <div className="category_hero_banner">
        <img
          className="category_banner_image"
          src={banner}
          alt={`${category} banner`}
        />
        <div className="banner_overlay_content">
          <h1>{categoryTitles[category] || `${category.toUpperCase()} COLLECTION`}</h1>
          <p>{categoryDescriptions[category]}</p>
        </div>
      </div>

      <div className="category_main_container">
        {/* Filter and Sort Toolbar */}
        <div className="category_toolbar">
          {/* Search in category */}
          <div className="category_search_wrap">
            <Search size={16} className="cat_search_icon" />
            <input
              type="text"
              placeholder={`Search in ${category}...`}
              value={catSearch}
              onChange={(e) => setCatSearch(e.target.value)}
            />
          </div>

          {/* Price Range Pills */}
          <div className="price_pills_group">
            <button
              className={`price_pill ${priceFilter === "all" ? "active" : ""}`}
              onClick={() => setPriceFilter("all")}
            >
              All Prices
            </button>
            <button
              className={`price_pill ${priceFilter === "under50" ? "active" : ""}`}
              onClick={() => setPriceFilter("under50")}
            >
              Under $50
            </button>
            <button
              className={`price_pill ${priceFilter === "50to75" ? "active" : ""}`}
              onClick={() => setPriceFilter("50to75")}
            >
              $50 - $75
            </button>
            <button
              className={`price_pill ${priceFilter === "over75" ? "active" : ""}`}
              onClick={() => setPriceFilter("over75")}
            >
              $75+
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="sort_dropdown_wrap">
            <SlidersHorizontal size={15} />
            <span>Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort_select"
            >
              <option value="featured">Featured / Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="discount">Biggest Discount</option>
            </select>
          </div>
        </div>

        {/* Results Count Banner */}
        <div className="category_results_count">
          <p>
            Showing <strong>{displayedProducts.length}</strong> of{" "}
            <strong>{products.length}</strong> products
          </p>
        </div>

        {/* Product Grid or Empty State */}
        {displayedProducts.length > 0 ? (
          <div className="category_product_grid">
            {displayedProducts.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                price_new={item.new_price}
                price_old={item.old_price}
              />
            ))}
          </div>
        ) : (
          <div className="category_no_products">
            <Filter size={40} className="empty_filter_icon" />
            <h3>No Products Found</h3>
            <p>We couldn't find any items matching your selected filters.</p>
            <button
              className="btn_reset_filters"
              onClick={() => {
                setPriceFilter("all");
                setCatSearch("");
                setSortBy("featured");
              }}
            >
              <RotateCcw size={15} /> Reset Filters
            </button>
          </div>
        )}

        {/* Dynamic Load More Button */}
        {visibleCount < products.length && (
          <div className="category_loadmore_wrap">
            <button
              className="btn_load_more"
              onClick={() => setVisibleCount((prev) => prev + 4)}
            >
              <span>Load More Products ({products.length - visibleCount} remaining)</span>
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ShopCategory;
