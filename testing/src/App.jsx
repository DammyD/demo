import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import hero from "./assets/hero.jpg";
import "./App.css";

function App() {

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <>
      <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
        <div className="logo-container">
          <a className="logo" href="#">
            B.
          </a>
          <div className="close-icon" onClick={closeMenu}>
            <MdClose size="30px" />
          </div>
        </div>

        <div className="mobile-menu-items">
          <a href="#" onClick={closeMenu}>blog</a>
          <a href="#" onClick={closeMenu}>contact</a>
          <a href="#" onClick={closeMenu}>about</a>
        </div>
      </div>

      <nav>
        <div className="wrapper">
          <a href="#" className="logo">
            B.
          </a>
          <div className="menu-items">
            <a href="#">blog</a>
            <a href="#">contact</a>
            <a href="#">about</a>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            <FiMenu size="30px" />
          </div>
        </div>
      </nav>

      <main className="hero-section">
        <div className="wrapper">
          <div className="left">
            <h1>Hi, I'm Blessing</h1>
            <p>I build beautiful websites that modern trends demand.</p>
            <a className="btn" href="#">
              Contact Me
            </a>
          </div>

          <div className="right">
            <div className="hero-image-container">
              <img src={hero} className="hero-image" alt="hero" />
            </div>
          </div>

          <div className="social">
            <a href="#">
              <FaXTwitter size="30px" />
            </a>

            <a href="#">
              <FaInstagram size="30px" />
            </a>

            <a href="#">
              <FaGithub size="30px" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
