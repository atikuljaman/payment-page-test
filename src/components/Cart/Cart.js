import React from "react";
import img1 from "../../assets/images/t-shirt-1.jpg";
import img2 from "../../assets/images/t-shirt-2.jpg";
import { BsTruck } from "react-icons/bs";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <h5>Your cart</h5>

      <div className="mt-4">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex">
            <div className="cart-img-container">
              <img className="w-100 h-100 rounded-pill" src={img1} alt="" />
            </div>
            <div className="ms-3">
              <h5 className="product-title">
                T-shirt <br /> Summer Vibes
              </h5>
              <p className="product-number">#261311</p>
            </div>
          </div>
          <div>
            <h5>$89.99</h5>
          </div>
        </div>
        <div className="d-flex align-items-center mt-4 justify-content-between">
          <div className="d-flex">
            <div className="cart-img-container">
              <img className="w-100 h-100 rounded-pill" src={img2} alt="" />
            </div>
            <div className="ms-3">
              <h5 className="product-title">
                Basic Slim <br /> Fit T-shirt
              </h5>
              <p className="product-number">#261311</p>
            </div>
          </div>
          <div>
            <h5>$69.99</h5>
          </div>
        </div>
      </div>

      <div className="total-cost-container">
        <span className="total-cost">Total Cost</span>
        <span>$159.98</span>
      </div>

      <div className="d-flex align-items-center justify-content-center">
        <div>
          <BsTruck className="cart-truck-icon" />
        </div>
        <span className="free-shipping">
          You are <strong>$30.02</strong> away <br /> from free shipping!
        </span>
      </div>
    </div>
  );
};

export default Cart;
