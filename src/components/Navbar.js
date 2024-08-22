import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  return (
    <div class="container">
      <div class="menu__container">
        <LuMenu />
      </div>

      <div class="logo__container">
        <img src={logo} />
        <p>STEEM</p>
      </div>
    </div>
  );
};

export default Navbar;
