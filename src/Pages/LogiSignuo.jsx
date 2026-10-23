import React, { useState, useContext } from "react";
import Footer from "../Components/Footer/Footer";
import "./CSS/LoginSignup.css";
import { ShopContext } from "../Context/ShopContext";
import { useNavigate } from "react-router-dom";
import {
  Lock,
  Mail,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const LogiSignuo = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(true);

  const { loginUser, showToast } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      showToast("Please enter your email and password", "error");
      return;
    }
    if (!isLogin && !name) {
      showToast("Please enter your full name", "error");
      return;
    }
    if (!isLogin && !agreed) {
      showToast("Please agree to the Terms of Service", "error");
      return;
    }

    loginUser(name || email.split("@")[0], email);
    navigate("/");
  };

  const handleSocialLogin = (provider) => {
    loginUser(`${provider} User`, `user@${provider.toLowerCase()}.com`);
    navigate("/");
  };

  return (
    <div className="auth_page_layout">
      <div className="auth_container">
        <div className="auth_card">
          <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>
          <p className="auth_subtitle">
            {isLogin
              ? "Sign in to manage your orders, wishlist, and exclusive discounts."
              : "Join our exclusive club for 15% off and early access to drops."}
          </p>

          {/* Social Quick Login */}
          <div className="social_auth_group">
            <button
              type="button"
              className="btn_social"
              onClick={() => handleSocialLogin("Google")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>

          <div className="auth_divider">
            <span>or continue with email</span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="auth_form">
            {!isLogin && (
              <div className="auth_input_wrap">
                <User size={18} className="auth_field_icon" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={!isLogin}
                />
              </div>
            )}

            <div className="auth_input_wrap">
              <Mail size={18} className="auth_field_icon" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="auth_input_wrap">
              <Lock size={18} className="auth_field_icon" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password (at least 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn_toggle_pw"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {isLogin ? (
              <div className="auth_forgot_row">
                <label className="remember_label">
                  <input type="checkbox" defaultChecked />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" className="forgot_link">
                  Forgot password?
                </a>
              </div>
            ) : (
              <div className="auth_agree_terms">
                <input
                  type="checkbox"
                  id="agree_terms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <label htmlFor="agree_terms">
                  I agree to the <a href="#terms">Terms of Service</a> &{" "}
                  <a href="#privacy">Privacy Policy</a>
                </label>
              </div>
            )}

            <button type="submit" className="btn_auth_submit">
              <span>{isLogin ? "Sign In to Account" : "Create My Account"}</span>
              <ArrowRight size={17} />
            </button>
          </form>

          {/* Toggle Login / Register */}
          <div className="auth_switch_mode">
            {isLogin ? (
              <p>
                Don't have an account?{" "}
                <button
                  type="button"
                  className="switch_btn"
                  onClick={() => setIsLogin(false)}
                >
                  Create one now
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button
                  type="button"
                  className="switch_btn"
                  onClick={() => setIsLogin(true)}
                >
                  Sign In
                </button>
              </p>
            )}
          </div>

          <div className="auth_guarantee_row">
            <ShieldCheck size={16} />
            <span>Protected by Google reCAPTCHA & SSL Encryption</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LogiSignuo;