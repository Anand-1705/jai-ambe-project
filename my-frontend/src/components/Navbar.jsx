// src/components/Navbar.jsx

import React from "react";
import logo from "../assets/company_logo.png";

function Navbar() {

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "products", label: "Products" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "quality", label: "Quality" },
    { id: "applications", label: "Applications" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "contact", label: "Contact" },
  ];

  return (

    <header className="sticky-top shadow-sm bg-white">

      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">

        <div className="container">

          {/* Logo */}

          <a className="navbar-brand" href="#home">
            <img
              src={logo}
              alt="logo"
              style={{ height: "100px" }}
            />
          </a>

          {/* Mobile Toggle */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >

            <ul className="navbar-nav">

              {navItems.map((item) => (

                <li
                  className="nav-item"
                  key={item.id}
                >

                  <a
                    className="nav-link"
                    href={`#${item.id}`}
                  >
                    {item.label}
                  </a>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </nav>

    </header>

  );

}

export default Navbar;