import React, { useState } from "react";
import logo from "./assets/lgo.png";
import wavebanner from "./assets/wavebanner.svg";
import "./App.css";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app-container font-cabin">
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="SupplyNext Logo" className="logo-image " />
          <div className="text-sm font-semibold">SupplyNext</div>
        </div>
        <button
          className="lg:hidden ml-auto mr-4 text-gray-400 hover:text-gray-600"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <nav
          className={`lg:flex lg:space-x-10 text-gray-400 text-sm ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <a href="#about">About</a>
          <a href="#product-tour">Product Tour</a>
          <a href="#contact">Contact Us</a>
          <a href="#login">Login</a>
          <button className="register-button font-semibold -mt-2   text-gray-300">
            Register
          </button>
        </nav>
      </div>
      <div className="hero-section font-cabin">
        <h1 className="text-5xl pl-10 leading-tight pt-32 font-thin text-gray-200 uppercase ">
          {" "}
          Empower Your Business with <br />
          Smart Supply Solutions.
        </h1>
        <p className="text-md capitalize font-sans font-semibold text-gray-400 pt-2 pl-10">
          better visibility, better control, better decisions.
        </p>
        <div className="button">
          <div className="inline-flex space-x-5 pl-10 items-center">
            <button className="bg-cyan-500 font-sans text-white font-semibold py-2 px-4 mt-8 transition duration-300 transform hover:scale-105 hover:bg-cyan-600">
              Get Started
            </button>

            <a
              href="link"
              className="text-xs  text-gray-200 font-semibold mt-8 ml-4 transition duration-300 hover:text-hover-blue hover:underline"
            >
              View Demo Now
            </a>
          </div>
        </div>
      </div>
      <img src={wavebanner} alt="Wave Banner" className="wave-banner" />
    </div>
  );
};

export default App;
