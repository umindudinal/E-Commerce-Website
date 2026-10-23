import React, { useContext } from "react";
import "./RelatedProducts.css";
import { ShopContext } from "../../Context/ShopContext";
import Item from "../Item/Item";


const RelatedProducts = ({ currentProduct }) => {
  const { all_products } = useContext(ShopContext);

  if (!currentProduct) return null;

  // Find 4 other products in the same category
  const related = all_products
    .filter(
      (item) =>
        item.category === currentProduct.category && item.id !== currentProduct.id
    )
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="related_products_section">
      <div className="section_container">
        <div className="section_header">
          <h2 className="section_title">Related Styles You May Love</h2>
          <p className="section_subtitle">
            Curated pairings designed to complement your selected style.
          </p>
        </div>

        <div className="related_products_grid">
          {related.map((item) => (
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
      </div>
    </section>
  );
};

export default RelatedProducts;
