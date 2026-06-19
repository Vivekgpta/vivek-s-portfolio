import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        Zenith Studio
      </div>

      {/* Right Side */}
      <div className="navbar-right">

        <ThemeToggle />

        <a
          href="https://wa.me/919142457610"
          target="_blank"
          rel="noreferrer"
          className="hire-btn"
        >
          Hire Me
        </a>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/services" onClick={() => setMenuOpen(false)}>
          Services
        </NavLink>

        <NavLink to="/work" onClick={() => setMenuOpen(false)}>
          Work
        </NavLink>

        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
          About
        </NavLink>

        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>
      </div>

    </nav>
  );
}