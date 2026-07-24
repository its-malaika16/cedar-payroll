import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img src="/assets/logo/payrolllogo.svg" alt="logo" />
        </NavLink>

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            What We Offer
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            Who We Serve
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            About Cedar Payroll
          </NavLink>
        </nav>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
