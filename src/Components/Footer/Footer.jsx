import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Heart, ShieldCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer_main">
      <div className="footer_container">
        {/* Top 4 Columns */}
        <div className="footer_grid">
          {/* Column 1: Brand Info */}
          <div className="footer_col brand_col">
            <Link to="/" className="footer_brand">
              <img src={footer_logo} alt="Shopper Logo" className="footer_logo_img" />
              <div className="brand_text">
                <span className="brand_name">SHOPPER</span>
                <span className="brand_tag">LUXURY & STYLE</span>
              </div>
            </Link>

            <p className="brand_desc">
              Your premier global destination for runway trends, tailored wardrobe
              classics, and sustainable modern apparel designed for confident living.
            </p>

            <div className="footer_contact_info">
              <div className="contact_row">
                <MapPin size={16} className="contact_icon" />
                <span>5th Avenue Fashion District, NY 10001</span>
              </div>
              <div className="contact_row">
                <Phone size={16} className="contact_icon" />
                <span>+1 (800) 555-SHOP</span>
              </div>
              <div className="contact_row">
                <Mail size={16} className="contact_icon" />
                <span>support@shopperluxe.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer_col">
            <h4 className="footer_col_title">Collections</h4>
            <ul className="footer_nav_links">
              <li><Link to="/women">Women's Fashion</Link></li>
              <li><Link to="/men">Men's Wardrobe</Link></li>
              <li><Link to="/kids">Kids & Youth</Link></li>
              <li><Link to="/">New Arrivals</Link></li>
              <li><Link to="/women">Best Sellers</Link></li>
              <li><Link to="/men">Exclusive Flash Sale</Link></li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="footer_col">
            <h4 className="footer_col_title">Customer Care</h4>
            <ul className="footer_nav_links">
              <li><Link to="/cart">Order Tracking</Link></li>
              <li><Link to="/cart">Shopping Bag</Link></li>
              <li><a href="#shipping">Shipping & Delivery</a></li>
              <li><a href="#returns">30-Day Returns</a></li>
              <li><a href="#size-guide">Size & Fit Guide</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Column 4: Social & Trust */}
          <div className="footer_col">
            <h4 className="footer_col_title">Connect With Us</h4>
            <p className="social_desc">
              Follow our social channels for daily styling reels and exclusive behind-the-scenes previews.
            </p>

            <div className="footer_socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social_circle" title="Instagram">
                <img src={instagram_icon} alt="Instagram" />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="social_circle" title="Pinterest">
                <img src={pintester} alt="Pinterest" />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="social_circle" title="WhatsApp">
                <img src={whatsapp_icon} alt="WhatsApp" />
              </a>
            </div>

            <div className="footer_trust_badge">
              <ShieldCheck size={20} className="trust_check_icon" />
              <div>
                <strong>PCI-DSS Certified</strong>
                <span>Bank-level encrypted transactions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment icons */}
        <div className="footer_bottom">
          <div className="footer_copy">
            <p>
              &copy; {new Date().getFullYear()} SHOPPER Inc. All rights reserved. Crafted with{" "}
              <Heart size={14} className="heart_copy_icon" /> for fashion lovers worldwide.
            </p>
          </div>

          <div className="footer_legal_links">
            <a href="#privacy">Privacy Policy</a>
            <span className="dot">•</span>
            <a href="#terms">Terms of Service</a>
            <span className="dot">•</span>
            <a href="#cookies">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;