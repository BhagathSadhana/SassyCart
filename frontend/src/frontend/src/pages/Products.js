import React, { useEffect, useState } from "react";
import API from "../services/api";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      {products.map(p => (
        <div key={p._id}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
