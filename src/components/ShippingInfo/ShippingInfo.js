import React from "react";
import "./ShippingInfo.css";

const ShippingInfo = () => {
  return (
    <div className="shipping-info-section">
      <h5>Shipping Information</h5>
      <div className="shipping-form mt-4">
        <>
          <div className="mb-3 d-flex">
            <input
              className="me-3 rounded-pill py-2 px-3"
              placeholder="Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <input
              className="me-3 rounded-pill py-2 px-3"
              placeholder="Address"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="mb-3 d-flex">
            <input
              className="me-3 rounded-pill py-2 px-3"
              placeholder="First name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <input
              className="me-3 rounded-pill py-2 px-3"
              placeholder="city"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>

          <div className="mb-3 d-flex">
            <input
              className="me-3 rounded-pill py-2 px-3"
              placeholder="Last name"
              id="basic-url"
              aria-describedby="basic-addon3"
            />
            <input
              className="me-3 rounded-pill py-2 px-3"
              placeholder="Postal Code/ ZIP"
              id="basic-url"
              aria-describedby="basic-addon3"
            />
          </div>

          <div className="mb-3 d-flex">
            <input
              className="me-3 rounded-pill py-2 px-3"
              placeholder="Phone number"
            />
            <select className="px-3 me-3 rounded-pill classic">
              <option>Poland</option>
            </select>
          </div>
        </>
      </div>
    </div>
  );
};

export default ShippingInfo;
