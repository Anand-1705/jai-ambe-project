// src/components/Infrastructure.jsx
import React, { useEffect, useState } from "react";

const API_URL = "https://renowned-unity-60b52ac485.strapiapp.com";

function Infrastructure() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/infrastructure?populate=*`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      })
      .catch(console.error);
  }, []);

  if (!data) return null;

  const description =
    data.description?.[0]?.children?.[0]?.text || "";

  const imageUrl = data.image?.url;

  return (
    <section id="infrastructure" className="section-padding">

      <div className="container">

        <div className="row align-items-center g-5">

          <div className="col-lg-6">

            <span className="section-kicker">
              Infrastructure
            </span>

            <h2 className="section-title">
              {data.title}
            </h2>

            <p>{description}</p>

          </div>

          <div className="col-lg-6">

            {imageUrl && (
              <img
                src={imageUrl}
                alt="Infrastructure"
                className="img-fluid rounded shadow-sm"
              />
            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Infrastructure;
