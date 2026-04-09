import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = ["home", "services", "about", "contact"];

  return (
    <nav
      className="navbar navbar-expand-lg mb-4 border-bottom"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container">
        {/* Brand */}
        <NavLink
          className="navbar-brand fw-bold"
          to="/"
          style={{
            color: "#ff7f50",
            backgroundColor: "transparent",
            borderRadius: "8px",
          }}
        >
          Pixim-Photo
        </NavLink>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(40%)" }}
          ></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item}>
                <NavLink
                  exact
                  className="nav-link fw-bold"
                  to={`/`}
                  style={{
                    color: "#ff7f50",
                    backgroundColor: "transparent",
                    borderRadius: "8px",
                    padding: "5px 10px",
                    margin: "0 3px",
                  }}
                  activeStyle={{
                    textDecoration: "underline",
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
