// src/App.jsx
import React, { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Contact from "./components/Contact";
import Infrastructure from "./components/Infrastructure";
import Applications from "./components/Applications";
import Quality from "./components/Quality";
import Manufacturing from "./components/Manufacturing";
import Products from "./components/Products";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    // AOS init and smooth scroll omitted for brevity

    // Fetch Contact data from Strapi
    fetch("https://renowned-unity-60b52ac485.strapiapp.com/api/contact?populate=*")
      .then((res) => res.json())
      .then((data) => {
        // Set to the data object (with id and attributes)
        setContactData(data.data);
      })
      .catch((err) => console.error("API ERROR:", err));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Manufacturing />
      <Quality />
      <Applications />
      <Infrastructure />
      {/* Pass fetched contact data as prop */}
      <Contact data={contactData} />
    </>
  );
}

export default App;
