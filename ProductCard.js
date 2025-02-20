import React from "react";

export default function ProductCard({ product, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title.substring(0, 20)}...</h2>
      <p className="product-price">${product.price}</p>
      <button className="Add To Card">Add To Card</button>
      <button className="buy-now">Buy Now</button>
      
      
    </div>
  );
}
