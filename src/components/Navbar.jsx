import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">MyLogo</div>

      {/* Links Section */}
      <div className="links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/my-works"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          My Works
        </NavLink>
      </div>

      {/* Contact Section */}
      <div className="contact">
        +88019*****109
        <div className="contact-icons">
          <img
            src="https://cdn-icons-png.flaticon.com/128/15713/15713434.png"
            alt="WhatsApp"
          />
        </div>
        <div className="contact-icons">
          <img
            src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png"
            alt="Instagram"
          />
        </div>
        <div className="contact-icons">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
            alt="Facebook"
          />
        </div>
        <div className="contact-icons">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png"
            alt="YouTube"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
