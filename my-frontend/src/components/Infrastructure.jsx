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

  const imageUrl = data.image?.url || "";

  return (
    <section id="infrastructure" className="section-padding">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="section-kicker">Infrastructure</span>
            <h2 className="section-title">{data.title}</h2>
            <p>{description}</p>

            <ul className="list-unstyled product-list mt-4">
              <li>
                <i className="fa-solid fa-industry text-teal me-2"></i>
                {data.plants} plants
              </li>
              <li>
                <i className="fa-solid fa-warehouse text-teal me-2"></i>
                {data.warehouses} warehouses
              </li>
              <li>
                <i className="fa-solid fa-layer-group text-teal me-2"></i>
                {data.products}+ product SKUs
              </li>
              <li>
                <i className="fa-solid fa-users text-teal me-2"></i>
                {data.customers}+ customers
              </li>
              <li>
                <i className="fa-solid fa-clock-rotate-left text-teal me-2"></i>
                {data.experience}+ years experience
              </li>
              <li>
                <i className="fa-solid fa-globe-asia text-teal me-2"></i>
                {data.presence}
              </li>
            </ul>
          </div>

          <div className="col-lg-6">
            <div className="infra-gallery">
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
      </div>
    </section>
  );
}

export default Infrastructure;