// import React from "react";
import "./Header.css";
import logo from "../../assets/images/Logo.svg";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="navLinks">
        <a href="/Shop" className="nav-link">Shop</a>
        <a href="/Order" className="nav-link">Order</a>
        <a href="/Inventory" className="nav-link">Inventory</a>
        <a href="/Login" className="nav-link">Login</a>
      </div>
    </nav>
  );
};

export default Header;
