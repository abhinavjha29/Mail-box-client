import React from "react";
import { Badge, Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"; // Assuming you are using React Router for routing

const Sidebar = () => {
  const unreadCount = 10;
  return (
    <Navbar bg="light" expand="lg" className="flex-column">
      <Navbar.Brand as={Link} to="/">
        Gmail Clone
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column">
          <Button variant="primary" className="mb-3" as={Link} to="/compose">
            Compose
          </Button>
          <Nav.Link as={Link} to="/inbox">
            Inbox {unreadCount > 0 && <Badge bg="danger">{unreadCount}</Badge>}
          </Nav.Link>
          <Nav.Link as={Link} to="/sent">
            Sent
          </Nav.Link>
          <Nav.Link as={Link} to="/drafts">
            Drafts
          </Nav.Link>
          <Nav.Link as={Link} to="/trash">
            Trash
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Sidebar;
