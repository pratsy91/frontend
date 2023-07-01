import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate, useRouteLoaderData } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const token = useRouteLoaderData("token");

  const logoutHandler = () => {
    localStorage.removeItem("token");

    navigate("/auth?mode=login");
  };
  return (
    <Navbar expand="lg" variant="light" bg="light" className={classes.navbar}>
      <Navbar.Brand>Chat App</Navbar.Brand>
      <Button variant="dark">Login</Button>
    </Navbar>
  );
};

export default Header;
