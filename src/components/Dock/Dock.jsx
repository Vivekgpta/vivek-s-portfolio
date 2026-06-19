import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaBriefcase,
  FaPalette,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";

import "./Dock.css";

export default function Dock() {
  const [showDock, setShowDock] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (
        currentScrollY > lastScrollY &&
        currentScrollY > 100
      ) {
        setShowDock(false);
      } else {
        setShowDock(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <div
      className={`dock ${
        showDock ? "show" : "hide"
      }`}
    >
      <NavLink to="/">
        <FaHome />
      </NavLink>

      <NavLink to="/services">
        <FaBriefcase />
      </NavLink>

      <NavLink to="/work">
        <FaPalette />
      </NavLink>

      <NavLink to="/about">
        <FaUser />
      </NavLink>

      <NavLink to="/contact">
        <FaEnvelope />
      </NavLink>
    </div>
  );
}