import React, { useState } from "react";
import "./NewCollection.css";
import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";
import { Layers } from "lucide-react";

const NewCollection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCollection = new_collection.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  return (
    <section className="new_collection_section" id="new-collection">
      <div className="section_container">
        <div className="section_header">
          <h2 className="section_title">Fresh New Collections</h2>
          <p className="section_subtitle">
            Explore the latest seasonal pieces handpicked to elevate your personal wardrobe.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="filter_pills_container">
            <button
              className={`filter_pill ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              <Layers size={14} /> All Styles
            </button>
            <button
              className={`filter_pill ${activeFilter === "women" ? "active" : ""}`}
              onClick={() => setActiveFilter("women")}
            >
              Women
            </button>
            <button
              className={`filter_pill ${activeFilter === "men" ? "active" : ""}`}
              onClick={() => setActiveFilter("men")}
            >
              Men
            </button>
            <button
              className={`filter_pill ${activeFilter === "kid" || activeFilter === "kids" ? "active" : ""}`}
              onClick={() => setActiveFilter("kid")}
            >
              Kids
            </button>
          </div>
        </div>

        <div className="new_collection_grid">
          {filteredCollection.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price_new={item.new_price}
              price_old={item.old_price}
              isNew={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCollection;