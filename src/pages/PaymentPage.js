import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { BsCart3, BsTruck, BsArrowLeft } from "react-icons/bs";
import Login from "../authentication/Login/Login";
import Cart from "../components/Cart/Cart";
import DeliveryMethod from "../components/DeliveryMethod/DeliveryMethod";
import PaymentMethod from "../components/PaymentMathod/PaymentMethod";
import ShippingInfo from "../components/ShippingInfo/ShippingInfo";
import swal from "sweetalert";
import "./PaymentPage.css";

const PaymentPage = () => {
  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCheckout = () => {
    if (!isLogin) {
      swal({
        title: "Error",
        text: "Please login first to proceed to checkout!",
        icon: "error",
      });
    } else {
      swal({
        title: "Payment error",
        text: "Payment Option Coming Soon!",
        icon: "error",
      });
    }
  };

  return (
    <>
      <div className="payment-section container my-5">
        <div className="header">
          <h4>Shipping and Payment</h4>
          <div className="d-flex align-items-center">
            <div className="cart-icon-container">
              <BsCart3 className="cart-icon" />
            </div>
            <div className="divider"></div>
            <div className="truck-icon-container">
              <BsTruck className="truck-icon" />
            </div>
          </div>
        </div>

        <div className="my-5">
          <Row className="gx-5">
            <Col md={5}>
              {!isLogin && (
                <div className="button-container mb-5">
                  <button onClick={handleShow} className="login-btn">
                    Log in
                  </button>
                  <button className="signup-btn"> sign up</button>
                </div>
              )}
              <ShippingInfo />
            </Col>
            <Col md={4}>
              <PaymentMethod />
              <DeliveryMethod />
            </Col>
            <Col md={3}>
              <Cart />
            </Col>
          </Row>
        </div>

        <div className="footer">
          <div>
            <button className="back-btn">
              <BsArrowLeft /> <span className="ms-2">Back</span>
            </button>
          </div>
          <div>
            <button className="continue-btn">Continue Shopping</button>
            <button onClick={handleCheckout} className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {/* CALLING LOGIN MODAL */}

      <Login
        handleClose={handleClose}
        show={show}
        setShow={setShow}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
    </>
  );
};

export default PaymentPage;
