// src/components/Applications.jsx
import React, { useEffect, useState } from "react";

const API_URL = "https://renowned-unity-60b52ac485.strapiapp.com";

function Applications() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/applications?populate=*`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data || []);
      })
      .catch(console.error);
  }, []);

  return (
    <section id="applications" className="py-5 bg-light">
      <div className="container text-center">

        <h2 className="fw-bold mb-5">
          Applications
        </h2>

        <div className="row g-4">

          {data.map((item, i) => {

            const imageUrl = item.image?.url;

            return (
              <div className="col-md-6 col-lg-3" key={i}>

                <div className="card p-2 shadow-sm">

                  {imageUrl && (
                    <img
                      src={imageUrl}
                      className="img-fluid rounded"
                      style={{
                        height: "260px",
                        objectFit: "cover",
                      }}
                      alt="application"
                    />
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Applications;
