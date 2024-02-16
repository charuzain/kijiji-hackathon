import React from "react";
import headerPic from "../../header.png";
import car from "../../car.png";
import { useNavigate } from "react-router-dom";
const Product = () => {
  const navigate = useNavigate();
  const handlePaymentClick = () => {
    navigate("/escrowService");
  };

  return (
    <div className="container">
      <img className="container__header" alt="" src={headerPic} />
      <div className="escrow__container">
        <h1 className="escrow__header">Car</h1>
        <p className="escrow__description">2023 Kia Sportage LX</p>
        <div className="escrow__content">
          <img src={car} width="400" alt="" className="product__image" />
          <p>$33159.00</p>
        </div>
        <button className="escrow__button" onClick={handlePaymentClick}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Product;
