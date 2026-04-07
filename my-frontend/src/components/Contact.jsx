// src/components/Contact.jsx
import React, { useEffect, useState } from "react";

const API_URL = "https://renowned-unity-60b52ac485.strapiapp.com";

function Contact() {
  const [contact, setContact] = useState(null);
  const [footer, setFooter] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/contact?populate=*`)
      .then((res) => res.json())
      .then((res) => {
        setContact(res.data);
      })
      .catch((err) => console.error(err));

    fetch(`${API_URL}/api/footers?populate=*`)
      .then((res) => res.json())
      .then((res) => {
        setFooter(res.data?.[0] || null);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!contact) return <p>Loading...</p>;

  const description =
    contact.description?.[0]?.children?.[0]?.text || "";

  return (
    <>
      <section id="contact" className="py-5 contact-section">
        <div className="container">
          <div className="row align-items-center gx-5 gy-4">
            {/* LEFT SIDE */}
            <div className="col-lg-5 text-white d-flex flex-column justify-content-center pe-lg-5">
              <h2 style={{ fontSize: "42px", fontWeight: "700" }}>
                {contact.title}
              </h2>
              <h6
                className="text-info"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "15px",
                  letterSpacing: "1px",
                }}
              >
                {contact.subtitle}
              </h6>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.8",
                  color: "#e6e6e6",
                  marginBottom: "20px",
                  maxWidth: "500px",
                }}
              >
                {description}
              </p>
              <p style={{ fontSize: "16px", marginBottom: "10px" }}>
                <i className="fas fa-phone me-2 text-info"></i>
                {contact.phone}
              </p>
              <p style={{ fontSize: "16px", marginBottom: "10px" }}>
                <i className="fas fa-map-marker-alt me-2 text-info"></i>
                {contact.address}
              </p>
              <p style={{ fontSize: "16px" }}>
                <i className="fas fa-envelope me-2 text-info"></i>
                {contact.email}
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-7">
              <div className="card p-4 shadow">
                <h5>{contact.formTitle}</h5>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        placeholder={contact.namePlaceholder}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        placeholder={contact.emailPlaceholder}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        placeholder={contact.companyPlaceholder}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        placeholder={contact.phonePlaceholder}
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        placeholder={contact.messagePlaceholder}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary" type="button">
                        {contact.buttonText}
                      </button>
                    </div>
                  </div>
                </form>
                <div
                  className="mt-2"
                  style={{ overflow: "hidden", borderRadius: "10px" }}
                  dangerouslySetInnerHTML={{
                    __html: contact.mapEmbed || "",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>
            {footer
              ? footer.copyrightText
              : "© 2026 Jai Ambe Industries. All rights reserved."}
          </p>
        </div>
      </footer>
    </>
  );
}

export default Contact;