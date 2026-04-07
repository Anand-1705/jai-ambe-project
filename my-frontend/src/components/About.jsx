// src/components/About.jsx
import React, { useEffect, useState } from "react";
import aboutImg from "../assets/about.png";

function About() {
  const [data, setData] = useState(null);
  const API_URL = "https://renowned-unity-60b52ac485.strapiapp.com";

  useEffect(() => {
    fetch(`${API_URL}/api/about?populate=*`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  // Extract rich text description
  const description =
    data.description?.[0]?.children?.[0]?.text || "";

  // Determine image URL (API or fallback)
  const imgPath = data.image?.data?.attributes?.url;
  const imageUrl = imgPath
    ? imgPath.startsWith("http")
      ? imgPath
      : API_URL + imgPath
    : "";

  return (
    <section id="about" className="section-padding bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2>{data.title}</h2>
            <p>{description}</p>
            <div className="d-flex gap-4 mt-3">
              <div>
                <h4 className="text-info">{data.experience}+</h4>
                <p>Years Experience</p>
              </div>
              <div>
                <h4 className="text-info">{data.products}+</h4>
                <p>Products</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src={
                imageUrl
                  ? imageUrl.startsWith("http")
                    ? imageUrl
                    : API_URL + imageUrl
                  : aboutImg
              }
              alt="About"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
