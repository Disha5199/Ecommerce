// import React from "react";

export default function Modal({ product, onClose, onAddToCart }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} className="modal-image" />
        <p>{product.description}</p>
        <p className="product-price">${product.price}</p>
        <button onClick={onAddToCart} className="add-to-cart">Add to Cart</button>
        <button onClick={onClose} className="close-modal">Close</button>
      </div>
    </div>
  );
}
