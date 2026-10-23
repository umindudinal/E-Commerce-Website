import React from "react";
import "./Hero.css";
import hero_image from "../Assets/hero_image.png";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero_section">
      <div className="hero_container">
        {/* Left Column Text & CTA */}
        <div className="hero_content">

          <h1 className="hero_heading">
            Style Redefined, <br />
            <span className="hero_gradient_text">Confidence Crafted</span> For All.
          </h1>

          <p className="hero_description">
            Explore curated runway-inspired collections, tailored luxury essentials,
            and timeless wardrobe staples crafted with sustainable premium fabrics.
          </p>

          <div className="hero_actions">
            <Link to="/women" className="hero_btn_primary">
              <span>Shop Collection</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/men" className="hero_btn_secondary">
              <TrendingUp size={18} />
              <span>Explore Men's</span>
            </Link>
          </div>

          {/* Social Proof Stats */}
          <div className="hero_stats">
            <div className="stat_item">
              <strong>14k+</strong>
              <span>Happy Shoppers</span>
            </div>
            <div className="stat_divider"></div>
            <div className="stat_item">
              <strong>500+</strong>
              <span>Curated Outfits</span>
            </div>
            <div className="stat_divider"></div>
            <div className="stat_item">
              <strong>4.9 ★</strong>
              <span>Customer Rating</span>
            </div>
          </div>
        </div>

        {/* Right Column Image & Floating Cards */}
        <div className="hero_visual">
          <div className="hero_image_backdrop"></div>
          <div className="hero_image_wrapper">
            <img src={hero_image} alt="Fashion Hero Model" className="hero_main_img" />
          </div>

          {/* Floating Trust Card 1 */}
          <div className="floating_card top_card animate-float">
            <div className="card_pill_icon">
              <ShieldCheck size={20} />
            </div>
            <div className="card_pill_text">
              <strong>Verified Quality</strong>
              <span>100% Authentic Products</span>
            </div>
          </div>

          {/* Floating Offer Card 2 */}
          <div className="floating_card bottom_card">
            <div className="discount_circle">-40%</div>
            <div className="card_pill_text">
              <strong>Exclusive Offer</strong>
              <span>On First Order: <span className="highlight_code">SAVE20</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;