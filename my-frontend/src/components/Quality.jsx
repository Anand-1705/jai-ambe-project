// src/components/Quality.jsx
import React, { useEffect, useState } from "react";

const API_URL = "https://renowned-unity-60b52ac485.strapiapp.com";

function Quality() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/service-cards?populate=*`)
      .then((res) => res.json())
      .then((res) => {
        setCards(res.data || []);
      })
      .catch(console.error);
  }, []);

  return (
    <section id="quality" className="section-padding">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Quality Services
          </h2>
        </div>

        <div className="row g-4 justify-content-center">

          {cards.map((card, index) => {

            const title = card.title;
            const imageUrl = card.image?.url;

            return (
              <div
                key={card.id}
                className="col-lg-6 col-md-6"
              >
                <div className="service-item position-relative overflow-hidden">

                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={title}
                      className="img-fluid w-100"
                    />
                  )}

                  <div className="service-text text-center">
                    <h5>{title}</h5>
                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Quality;