import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Row, Col, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../actions/userActions";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">ShopAround</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/cart">
              <i className="fas fa-shopping-cart"></i>Cart
            </Nav.Link>

            {!!userInfo ? (
              <NavDropdown title={userInfo.name} id={userInfo.username}>
                <Nav.Link to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </Nav.Link>

                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link to="/login">
                <i className="fas fa-user"></i>Login
              </Nav.Link>
            )}

            {userInfo && userInfo.isAdmin && (
              <NavDropdown title="Admin" id="adminmenue">
                <Link to="/admin/userlist">
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </Link>

                <Link to="/admin/productlist">
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </Link>

                <Link to="/admin/orderlist">
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </Link>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
