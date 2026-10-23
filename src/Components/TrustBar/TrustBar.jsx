import React from "react";
import "./TrustBar.css";
import { Truck, ShieldCheck, RefreshCw, Headphones } from "lucide-react";

const TrustBar = () => {
  const perks = [
    {
      icon: <Truck size={26} className="trust_icon" />,
      title: "Free Express Delivery",
      subtitle: "On all orders above $75",
    },
    {
      icon: <RefreshCw size={26} className="trust_icon" />,
      title: "30-Day Easy Returns",
      subtitle: "Hassle-free return policy",
    },
    {
      icon: <ShieldCheck size={26} className="trust_icon" />,
      title: "100% Secure Checkout",
      subtitle: "256-bit SSL encrypted",
    },
    {
      icon: <Headphones size={26} className="trust_icon" />,
      title: "24/7 Dedicated Support",
      subtitle: "Expert customer assistance",
    },
  ];

  return (
    <section className="trust_section">
      <div className="trust_container">
        {perks.map((perk, idx) => (
          <div key={idx} className="trust_card">
            <div className="trust_icon_wrap">{perk.icon}</div>
            <div className="trust_info">
              <h4>{perk.title}</h4>
              <p>{perk.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
