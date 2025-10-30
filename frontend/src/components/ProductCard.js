import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name} className="product-img" />
      </Link>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <Link to={`/product/${product._id}`} className="btn">View</Link>
    </div>
  );
}

export default ProductCard;
