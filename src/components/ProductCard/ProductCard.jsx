import React from 'react';
import './ProductCard.scss';
const ProductCard = ({ image, productName, brandName, price, location }) => {
  return (
    <div className="product-card">
      <img src={image} alt={productName} className="product-image" />
      <h2 className="product-name">{productName}</h2>
      <div className="product-details">
        <p className="price">Price: ${price}</p>
        <p className="location">Location: {location}</p>
      </div>
    </div>
  );
};

export default ProductCard;
