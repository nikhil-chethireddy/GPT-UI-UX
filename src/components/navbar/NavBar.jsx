import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="gpt__navbar gradient__bg">
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#whatisGPT?">What is GPT?</a>
          </p>
          <p>
            <a href="#openai">Open AI</a>
          </p>
          <p>
            <a href="#casestudies">Case Studies</a>
          </p>
          <p>
            <a href="#library">Library</a>
          </p>
        </div>
      </div>
      <div className="gpt__navbar-sign">
        <p>sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt__navbar-menu_container scale-up-center">
            <div className="gpt__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#whatisGPT?">What is GPT?</a>
              </p>
              <p>
                <a href="#openai">Open AI</a>
              </p>
              <p>
                <a href="#casestudies">Case Studies</a>
              </p>
              <p>
                <a href="#library">Library</a>
              </p>
            </div>
            <div className="gpt__navbar-menu_container-sign">
              <p>sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
