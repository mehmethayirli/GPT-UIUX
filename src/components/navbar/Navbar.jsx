import React from "react";
import "./navbar.css";
//import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="gpt__navbar">
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links_logo">
          <img src={logo} alt="logo" />
          <div className="gpt__navbar-links_container">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#wgpt">What is GPT?</a>
            </p>
            <p>
              <a href="#possibility">Open AI</a>
            </p>
            <p>
              <a href="#features">Case Studies</a>
            </p>
            <p>
              <a href="#blog">Library</a>
            </p>
          </div>
        </div>
        <div className="gpt__navbar-sign">
          <p>Sign In</p>
          <button type="button">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
