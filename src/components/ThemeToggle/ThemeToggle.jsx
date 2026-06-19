import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Theme Toggle"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}