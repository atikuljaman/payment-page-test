import React from "react";
import inPostImg from "../../assets/images/inpost.png";
import dplImg from "../../assets/images/dpd.png";
import dhlImg from "../../assets/images/dnl.png";
import fedexImg from "../../assets/images/fedex.png";
import "./DeliveryMethod.css";

const DeliveryMethod = () => {
  return (
    <div className="delivery-method-container">
      <h5>Delivery method</h5>
      <div className="delivery-btn-container mt-4 mb-2 d-flex">
        <button className="delivery-method-btn me-2">
          <img src={inPostImg} alt="Paypal-logo" />
          <span>$20.00</span>
        </button>
        <button className="delivery-method-btn">
          <img src={dplImg} alt="Visa-logo" />
          <span>$12.00</span>
        </button>
      </div>
      <div className="delivery-btn-container d-flex">
        <button className="delivery-method-btn me-2">
          <img src={dhlImg} alt="Paypal-logo" />
          <span>$15.00</span>
        </button>
        <button className="delivery-method-btn">
          <img src={fedexImg} alt="Visa-logo" />
          <span>$10.00</span>
        </button>
      </div>
    </div>
  );
};

export default DeliveryMethod;
