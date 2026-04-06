// src/components/Products.jsx
import React, { useEffect, useState } from "react";

const API_URL = "https://renowned-unity-60b52ac485.strapiapp.com";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/bearings?populate=*`)
      .then((res) => res.json())
      .then((data) => setProducts(data.data || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="products" className="section-padding">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">
          Precision Bearing Solutions
        </h2>
        <div className="row">
          {products.map((item, i) => {
            const title = item.attributes?.title;
            const desc = item.attributes?.description;
            const imgPath = item.attributes?.image?.data?.attributes?.url;
            const imageUrl = imgPath
              ? imgPath.startsWith("http")
                ? imgPath
                : API_URL + imgPath
              : "";
            return (
              <div className="col-md-6" key={i}>
                <div className="card p-3 shadow-sm">
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={title}
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  )}
                  <h4 className="mt-3">{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
