import React from "react";
import "./Breadcrums.css";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrums = ({ product }) => {
  if (!product) {
    return (
      <nav className="breadcrums_container" aria-label="Breadcrumb">
        <div className="breadcrums_inner">
          <Link to="/" className="breadcrum_link">
            <Home size={15} /> <span>Home</span>
          </Link>
          <ChevronRight size={14} className="breadcrum_sep" />
          <Link to="/" className="breadcrum_link">
            Shop
          </Link>
        </div>
      </nav>
    );
  }

  const categoryPath =
    product.category === "women"
      ? "/women"
      : product.category === "men"
      ? "/men"
      : "/kids";

  return (
    <nav className="breadcrums_container" aria-label="Breadcrumb">
      <div className="breadcrums_inner">
        <Link to="/" className="breadcrum_link">
          <Home size={15} /> <span>Home</span>
        </Link>
        <ChevronRight size={14} className="breadcrum_sep" />
        <Link to={categoryPath} className="breadcrum_link capitalize">
          {product.category}
        </Link>
        <ChevronRight size={14} className="breadcrum_sep" />
        <span className="breadcrum_current" title={product.name}>
          {product.name}
        </span>
      </div>
    </nav>
  );
};

export default Breadcrums;