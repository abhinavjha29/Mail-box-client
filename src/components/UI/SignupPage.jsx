import axios from "axios";
import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const userDetail = {
      email,
      password,
    };
    if (confirmPassword === password) {
      try {
        const resp = await axios.post(
          "http://localhost:5000/user/signup",
          userDetail
        );
        if (resp) {
          alert(resp.data.msg);
          navigate("/login");
        } else {
          alert("something went wrong");
        }
      } catch (error) {
        console.log(error);
      }
    }

    // Add your signup logic here
    console.log("Signup form submitted");
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    // Reset form fields
    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="col-lg-6 d-flex justify-content-center align-items-center">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Sign Up</Card.Title>
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

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  ref={confirmPasswordRef}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>

            <div className="text-center mt-3">
              <p>
                Already signed up? <a href="#">Log in here</a>
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SignupPage;
