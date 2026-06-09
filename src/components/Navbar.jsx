import { useState } from "react";
import "./Navbar.css";

export default function Navbar({ page, setPage }) {

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Projects",
    "Contact",
  ];

  const handleNav = (item) => {
    setPage(item);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div
        className="navbar-logo"
        onClick={() => handleNav("Home")}
      >
        <span className="logo-main">
          Atlantic
        </span>

        <span className="logo-sub">
          Imperial
        </span>
      </div>

      <nav
        className={`navbar-links ${
          menuOpen ? "active" : ""
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item}
            className={`nav-link ${
              page === item ? "active" : ""
            }`}
            onClick={() => handleNav(item)}
          >
            {item}
          </button>
        ))}

        <button
          className="nav-cta"
          onClick={() => handleNav("Contact")}
        >
          Enquire Now
        </button>
      </nav>

      <button
        className="menu-toggle"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        ☰
      </button>

    </header>
  );
}