// src/components/Manufacturing.jsx
import React, { useEffect, useState } from "react";

const API_URL = "https://renowned-unity-60b52ac485.strapiapp.com";

function Manufacturing() {
  const [section, setSection] = useState(null);
  const [processes, setProcesses] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/manufacturing-section?populate=*`)
      .then((res) => res.json())
      .then((res) => {
        setSection(res.data);
      })
      .catch(console.error);

    fetch(`${API_URL}/api/manfacturing-processes?populate=*`)
      .then((res) => res.json())
      .then((res) => {
        setProcesses(res.data || []);
      })
      .catch(console.error);
  }, []);

  if (!section) return null;

  const mainImage = section.mainImage?.url;

  return (
    <section id="manufacturing" className="section-padding bg-light">
      <div className="container text-center">

        <h2 className="fw-bold mb-5">
          {section.heading}
        </h2>

        {mainImage && (
          <img
            src={mainImage}
            alt="Manufacturing"
            className="img-fluid rounded shadow mb-5"
            style={{ maxWidth: "1000px" }}
          />
        )}

        <div className="row g-4 justify-content-center">
          {processes.map((item, i) => {

            const title = item.title;
            const imageUrl = item.image?.url;

            return (
              <div className="col-md-3 col-6" key={i}>
                <div className="card p-3 shadow-sm h-100">

                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={title}
                      className="img-fluid rounded"
                      style={{
                        height: "170px",
                        objectFit: "cover",
                      }}
                    />
                  )}

                  <p className="mt-3 fw-semibold">
                    {title}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Manufacturing;