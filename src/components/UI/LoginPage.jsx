import axios from "axios";
import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Add your signup logic here
    console.log("Signup form submitted");
    console.log("Email:", email);
    console.log("Password:", password);
    const user_detail = { email, password };
    const resp = await axios.post(
      "http://localhost:5000/user/login",
      user_detail
    );
    if (resp) {
      console.log(resp.data);
      localStorage.setItem("token", resp.data.token);
      localStorage.setItem("isLogged", true);
      alert("login succesful");
      navigate("/inbox");
    }
    // Reset form fields
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="col-lg-6 d-flex justify-content-center align-items-center">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  ref={emailRef}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>

            <div className="text-center mt-3">
              <p>
                New User? <a href="#">Register here</a>
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
