import React, { useState, useContext } from "react";
import "./NewsLetter.css";
import { ShopContext } from "../../Context/ShopContext";
import { Mail, CheckCircle2, Shield, ArrowRight } from "lucide-react";

const NewsLatter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { showToast } = useContext(ShopContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      showToast("Please enter a valid email address", "error");
      return;
    }
    setIsSubscribed(true);
    showToast("🎉 Thank you for subscribing! Check your email for your discount code.", "success");
    setEmail("");
  };

  return (
    <section className="newsletter_section">
      <div className="newsletter_container">
        <div className="newsletter_card">
          <div className="newsletter_icon_circle">
            <Mail size={32} />
          </div>

          <h2 className="newsletter_title">
            Unlock 15% Off Your First Order
          </h2>

          <p className="newsletter_desc">
            Join 30,000+ fashion insiders and receive early access to new releases,
            private seasonal sales, and curated weekly outfit inspiration.
          </p>

          {isSubscribed ? (
            <div className="subscribed_alert">
              <CheckCircle2 size={24} className="subscribed_icon" />
              <div>
                <strong>You're On The VIP List!</strong>
                <p>We've sent your 15% welcome code to your inbox. Happy shopping!</p>
              </div>
            </div>
          ) : (
            <form className="newsletter_form" onSubmit={handleSubmit}>
              <div className="form_input_wrap">
                <Mail size={20} className="input_mail_icon" />
                <input
                  type="email"
                  placeholder="Enter your personal email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="newsletter_submit_btn">
                <span>Join VIP Club</span>
                <ArrowRight size={17} />
              </button>
            </form>
          )}

          <div className="newsletter_guarantee">
            <Shield size={14} />
            <span>We respect your privacy. No spam, unsubscribe anytime with 1-click.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLatter;