import React from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { LuMenu } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div class="container">
      <div class="menu__container">
        <LuMenu />
        <ul class="sidebar">
          <li>
            <a href="#">Notifications</a>
          </li>
          <li>
            <a href="#">Store</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
          <li>
            <a href="#">Chat</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </div>

      <div class="logo__container">
        <img src={logo} />
        <p>STEEM</p>
      </div>
    </div>
  );
};

export default Navbar;
