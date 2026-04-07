// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/company_logo.png";

const API_URL = "https://renowned-unity-60b52ac485.strapiapp.com";

function Navbar() {

  const [menu, setMenu] = useState([]);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {

    axios
      .get(`${API_URL}/api/navbars`)
      .then((res) => {

        let items = res.data.data || [];

        // 🔥 FORCE ORDER (your required order)

        const order = [
          "home",
          "about",
          "products",
          "manufacturing",
          "quality",
          "applications",
          "infrastructure",
          "contact",
        ];

        items.sort((a, b) => {
          const aIndex = order.indexOf(
            a.link?.replace("/", "")
          );
          const bIndex = order.indexOf(
            b.link?.replace("/", "")
          );
          return aIndex - bIndex;
        });

        setMenu(items);

      })
      .catch(console.error);

  }, []);

  // 🔥 Active Scroll Detection

  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }

        });

      },

      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.1,
      }

    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };

  }, []);

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

                const sectionId =
                  item.link?.replace("/", "");

                return (

                  <li
                    className="nav-item"
                    key={item.id}
                  >

                    <a
                      href={`#${sectionId}`}
                      className={`nav-link ${
                        activeSection === sectionId
                          ? "active"
                          : ""
                      }`}
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