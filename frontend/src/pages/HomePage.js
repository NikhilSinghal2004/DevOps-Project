import React, { useEffect, useState } from "react";
import API from "../api";
import ProductCard from "../components/ProductCard";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>Shop Products</h1>
      <div className="grid">
        {products.map(p => <ProductCard key={p._id} product={p} />)}
      </div>
    </div>
  );
}

export default HomePage;
