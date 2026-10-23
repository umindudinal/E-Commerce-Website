import React, { useState, useEffect } from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Copy, Check } from "lucide-react";

const Offers = () => {
  const [copied, setCopied] = useState(false);
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard?.writeText("SAVE20");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const padZero = (n) => String(n).padStart(2, "0");

  return (
    <section className="offers_section">
      <div className="offers_container">
        <div className="offers_content">
          <h2 className="offers_heading">
            Exclusive Offers <br />
            <span className="offers_gradient">Tailored For You</span>
          </h2>

          <p className="offers_desc">
            Save up to <strong>50% OFF</strong> our curated best sellers. Premium
            fabrics, flattering fits, and unmatched comfort delivered to your door.
          </p>

          {/* Countdown Clock */}
          <div className="countdown_box">
            <div className="countdown_label">
              <Clock size={16} />
              <span>Deal Ends In:</span>
            </div>
            <div className="countdown_timer">
              <div className="timer_block">
                <strong>{padZero(timeLeft.hours)}</strong>
                <span>HRS</span>
              </div>
              <span className="timer_colon">:</span>
              <div className="timer_block">
                <strong>{padZero(timeLeft.minutes)}</strong>
                <span>MIN</span>
              </div>
              <span className="timer_colon">:</span>
              <div className="timer_block">
                <strong>{padZero(timeLeft.seconds)}</strong>
                <span>SEC</span>
              </div>
            </div>
          </div>

          {/* Promo code copy badge & CTA */}
          <div className="offers_footer_actions">
            <div className="promo_copy_pill" onClick={handleCopyCode}>
              <span>Code: <strong>SAVE20</strong></span>
              <button className="copy_btn" title="Copy code">
                {copied ? <Check size={15} color="#10b981" /> : <Copy size={15} />}
              </button>
            </div>

            <Link to="/men" className="offers_btn_cta">
              <span>Claim Offer Now</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        {/* Visual Image */}
        <div className="offers_visual">
          <div className="offers_glow_circle"></div>
          <img
            src={exclusive_image}
            alt="Exclusive Fashion Offer"
            className="offers_img"
          />
        </div>
      </div>
    </section>
  );
};

export default Offers;