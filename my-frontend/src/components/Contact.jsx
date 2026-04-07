// src/components/Contact.jsx
import React, { useEffect, useState } from "react";

const API_URL = "https://renowned-unity-60b52ac485.strapiapp.com";

function Contact() {

  const [contact, setContact] = useState(null);

  useEffect(() => {

    fetch(`${API_URL}/api/footers?populate=*`)
      .then((res) => res.json())
      .then((res) => {

        setContact(res.data[0]);

      })
      .catch(console.error);

  }, []);

  if (!contact) return null;

  const description =
    contact.description?.[0]?.children?.[0]?.text || "";

  return (
    <section id="contact" className="py-5 contact-section">

      <div className="container">

        <h2>{contact.title}</h2>

        <p>{description}</p>

        <p>{contact.phone}</p>
        <p>{contact.address}</p>
        <p>{contact.email}</p>

      </div>

    </section>
  );
}

export default Contact;
