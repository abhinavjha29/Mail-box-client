import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Assuming you are using React Router for routing

const HomePage = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={10} md={8} lg={6}>
          <div className="text-center">
            <h1>Welcome to our Gmail Clone App</h1>
            <p className="lead">
              A modern and secure email platform designed for efficiency and
              real-time communication.
            </p>
            <p>
              Experience seamless email management with powerful features,
              including:
            </p>
            <ul className="text-left">
              <li>Sending messages with ease</li>
              <li>End-to-end encryption for security</li>
              <li>Real-time updates and notifications</li>
            </ul>
            <div>
              <Button variant="primary" as={Link} to="/login">
                Login
              </Button>{" "}
              <Button variant="secondary" as={Link} to="/signup">
                Sign Up
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
