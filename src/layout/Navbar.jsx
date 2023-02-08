import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="flex justify-center bg-opacity-0">
      <Link to="/">
        <img
          className="py-8"
          src={logo}
          alt="logo"
          width="227px"
          height="48px"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
