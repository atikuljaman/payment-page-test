import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import swal from "sweetalert";

const Login = ({ handleClose, show, setShow, setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      setShow(false);
      setIsLogin(true);
      swal({
        title: "Login Success",
        text: "Your login was successful!",
        icon: "success",
      });
    }
  };

  return (
    <>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <Modal.Body className="pb-5">
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <button className="w-100 login-btn" type="submit">
              Login
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
