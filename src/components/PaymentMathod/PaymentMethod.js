import React from "react";
import paypalImg from "../../assets/images/paypal.png";
import visaImg from "../../assets/images/visa.png";
import masterCardImg from "../../assets/images/master-card.png";
import discoverCardImg from "../../assets/images/discover.png";
import IdealCardImg from "../../assets/images/ideal.png";
import maestroImg from "../../assets/images/maestro.png";
import "./PaymentMethod.css";

const PaymentMethod = () => {
  return (
    <div className="payment-method-container">
      <h5>Payment method</h5>

      <div className="payment-btn-container mt-4 mb-2 d-flex">
        <button className="payment-method-btn">
          <img src={paypalImg} alt="Paypal-logo" />
        </button>
        <button className="payment-method-btn mx-2">
          <img src={visaImg} alt="Visa-logo" />
        </button>
        <button className="payment-method-btn">
          <img
            className="master-card-img"
            src={masterCardImg}
            alt="Master-card-logo"
          />
        </button>
      </div>
      <div className="payment-btn-container d-flex">
        <button className="payment-method-btn">
          <img
            className="maestro-card-img"
            src={maestroImg}
            alt="Paypal-logo"
          />
        </button>
        <button className="payment-method-btn mx-2">
          <img src={discoverCardImg} alt="Visa-logo" />
        </button>
        <button className="payment-method-btn">
          <img src={IdealCardImg} alt="Master-card-logo" />
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
