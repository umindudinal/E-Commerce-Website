import React, { useState } from "react";
import "./DescriptionBox.css";
import { Star, CheckCircle2, ShieldAlert } from "lucide-react";

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState("desc");

  const reviews = [
    {
      author: "Samantha R.",
      date: "2 days ago",
      rating: 5,
      title: "Absolute perfection! The fabric is so soft.",
      comment:
        "I was blown away by the craftsmanship. The drape is elegant and it fits true to size. Already received compliments at dinner!",
      verified: true,
    },
    {
      author: "Marcus T.",
      date: "1 week ago",
      rating: 5,
      title: "Premium quality that matches designer luxury.",
      comment:
        "Shipped in under 48 hours in gorgeous eco-friendly packaging. Stitching is immaculate and the color matches the photos exactly.",
      verified: true,
    },
    {
      author: "Elena K.",
      date: "2 weeks ago",
      rating: 4,
      title: "Extremely comfortable and stylish.",
      comment:
        "Great versatile piece. Wore it to work and transitioned into an evening out effortlessly. Highly recommended!",
      verified: true,
    },
  ];

  return (
    <div className="description_box_container">
      {/* Tabs Header */}
      <div className="desc_tabs_header">
        <button
          className={`desc_tab_btn ${activeTab === "desc" ? "active" : ""}`}
          onClick={() => setActiveTab("desc")}
        >
          Description & Details
        </button>
        <button
          className={`desc_tab_btn ${activeTab === "specs" ? "active" : ""}`}
          onClick={() => setActiveTab("specs")}
        >
          Care & Material Specs
        </button>
        <button
          className={`desc_tab_btn ${activeTab === "reviews" ? "active" : ""}`}
          onClick={() => setActiveTab("reviews")}
        >
          Customer Reviews <span className="tab_count_badge">142</span>
        </button>
      </div>

      {/* Tab 1: Description */}
      {activeTab === "desc" && (
        <div className="tab_panel animate-fade-in">
          <h3>Elevate Your Everyday Wardrobe</h3>
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It serves
            as a virtual marketplace where businesses and individuals can showcase
            their products, interact with customers, and conduct transactions
            without the need for a physical presence. E-commerce websites have
            gained immense popularity due to their convenience, accessibility, and
            the global reach they offer.
          </p>
          <p>
            This piece has been carefully designed using premium organic cotton and
            breathable stretch fibers. Tailored to flatter a variety of body types,
            it moves naturally with you throughout the day while retaining its sharp,
            crisp appearance wash after wash.
          </p>
          <div className="desc_highlights">
            <div className="highlight_item">
              <CheckCircle2 size={18} className="highlight_icon" />
              <span>Premium breathable fabric blend for all-day comfort</span>
            </div>
            <div className="highlight_item">
              <CheckCircle2 size={18} className="highlight_icon" />
              <span>Reinforced double-stitched seams for longevity</span>
            </div>
            <div className="highlight_item">
              <CheckCircle2 size={18} className="highlight_icon" />
              <span>Pre-shrunk fabric to maintain perfect fit over time</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Specs */}
      {activeTab === "specs" && (
        <div className="tab_panel animate-fade-in">
          <h3>Material Composition & Garment Care</h3>
          <div className="specs_table">
            <div className="spec_row">
              <span className="spec_label">Material:</span>
              <span className="spec_val">85% Organic Cotton, 15% Recycled Poly</span>
            </div>
            <div className="spec_row">
              <span className="spec_label">Fit Type:</span>
              <span className="spec_val">Regular Tailored Contemporary Fit</span>
            </div>
            <div className="spec_row">
              <span className="spec_label">Origin:</span>
              <span className="spec_val">Ethically Milled & Tailored in Portugal</span>
            </div>
            <div className="spec_row">
              <span className="spec_label">Washing:</span>
              <span className="spec_val">Machine wash cold with like colors (30°C)</span>
            </div>
            <div className="spec_row">
              <span className="spec_label">Drying:</span>
              <span className="spec_val">Tumble dry low or air dry in shade</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Reviews */}
      {activeTab === "reviews" && (
        <div className="tab_panel animate-fade-in">
          <div className="reviews_summary_banner">
            <div className="rating_score_col">
              <strong className="score_big">4.9</strong>
              <div className="stars_row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <span>Based on 142 reviews</span>
            </div>
            <div className="score_badge_col">
              <strong>98% of customers</strong> recommend this product to a friend.
            </div>
          </div>

          <div className="reviews_list">
            {reviews.map((rev, i) => (
              <div key={i} className="review_card">
                <div className="review_card_header">
                  <div className="review_author_info">
                    <span className="author_name">{rev.author}</span>
                    {rev.verified && (
                      <span className="verified_buyer_tag">
                        <CheckCircle2 size={12} /> Verified Buyer
                      </span>
                    )}
                  </div>
                  <span className="review_date">{rev.date}</span>
                </div>

                <div className="review_stars">
                  {[...Array(rev.rating)].map((_, j) => (
                    <Star key={j} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                <h4 className="review_headline">{rev.title}</h4>
                <p className="review_body">{rev.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DescriptionBox;
