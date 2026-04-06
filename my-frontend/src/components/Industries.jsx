// src/components/Industries.jsx
import React, { useEffect, useState } from "react";

const API_URL = "https://renowned-unity-60b52ac485.strapiapp.com";

function Industries() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/industries?populate=*`)
      .then((res) => res.json())
      .then((res) => {
        // If 'industries' is a singleton, it might be res.data.attributes
        // If it's a collection, res.data is an array; adjust accordingly.
        if (Array.isArray(res.data)) {
          setData(res.data[0]?.attributes);
        } else {
          setData(res.data?.attributes);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  const imgPath = data.image?.data?.attributes?.url;
  const imageUrl = imgPath
    ? imgPath.startsWith("http")
      ? imgPath
      : API_URL + imgPath
    : "";

  return (
    <section id="industries" className="section-padding bg-light">
      <div className="container text-center">
        <h2>Industries</h2>
        {imageUrl && <img src={imageUrl} alt="Industries" className="img-fluid" />}
      </div>
    </section>
  );
}

export default Industries;
