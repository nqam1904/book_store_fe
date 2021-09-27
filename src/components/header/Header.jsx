import * as React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSelector } from "redux/selectores/authSelector";
import "./index.scss";
const Header = () => {
  // const user = useSelector(userSelector);
  // console.log(user);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/admin">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin/account">
              Account
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/book">
              Book
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <span>Hello</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
