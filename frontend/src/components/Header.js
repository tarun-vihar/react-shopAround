import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Row, Col, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../actions/userActions";
import SearchBox from "./SearchBox";

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
        <Navbar.Brand as={Link} to="/">
          {" "}
          ShopAround
        </Navbar.Brand>
        {/* <SearchBox /> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* <SearchBox /> */}
          <SearchBox />
          <Nav className="ml-auto">
            <Nav.Item>
              <Link to="/cart" className="nav-link">
                <i className="fas fa-shopping-cart"></i>Cart
              </Link>
            </Nav.Item>

            {!!userInfo ? (
              <NavDropdown title={userInfo.name} id={userInfo.username}>
                <NavDropdown.Item as={Link} to={`/profile`}>
                  Profile
                </NavDropdown.Item>

                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Item>
                <Link to="/login" className="nav-link">
                  <i className="fas fa-user"></i>Login
                </Link>
              </Nav.Item>
            )}

            {userInfo && userInfo.isAdmin && (
              <NavDropdown title="Admin" id="adminmenue">
                <NavDropdown.Item as={Link} to={`/admin/userlist`}>
                  Users
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to={`/admin/productlist`}>
                  Products
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
