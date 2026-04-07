// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/company_logo.png";

const API_URL = "https://renowned-unity-60b52ac485.strapiapp.com";

function Navbar() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/navbars`)
      .then((res) => {
        setMenu(res.data.data || []);
      })
      .catch(console.error);

  }, []);

  return (
    <header className="sticky-top shadow-sm bg-white">
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div className="container">

          <a className="navbar-brand" href="#home">
            <img
              src={logo}
              alt="logo"
              style={{ height: "100px" }}
            />
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {menu.map((item) => {
                return (
                  <li
                    className="nav-item"
                    key={item.id}
                  >
                    <a
                      className="nav-link"
                      href={`#${item.link?.replace("/", "")}`}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
