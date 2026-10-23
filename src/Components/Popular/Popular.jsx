import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Popular = () => {
  return (
    <section className="popular_section">
      <div className="section_container">
        <div className="section_header">
          <h2 className="section_title">Most Popular In Women</h2>
          <p className="section_subtitle">
            Curated pieces that combine everyday effortless elegance with runway prestige.
          </p>
        </div>

        <div className="popular_grid">
          {data_product.map((item) => (
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

        <div className="section_cta_wrap">
          <Link to="/women" className="view_all_link">
            <span>Explore All Women's Styles</span>
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Popular;