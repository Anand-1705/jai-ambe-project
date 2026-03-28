import { useEffect, useState } from "react";

function Quality() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/service-cards?populate=*")
      .then((res) => res.json())
      .then((data) => {
        setCards(data.data || []);
      });
  }, []);

  return (
    <section id="quality" className="section-padding">
      <div className="container">

        {/* TITLE */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Quality Services</h2>
        </div>

        {/* CARD ROW */}
        <div className="row g-4 justify-content-center">

          {cards.map((card, index) => {

            const title = card.title;

            const imageUrl = card.image?.url
              ? `http://localhost:1337${card.image.url}`
              : "";

            return (
              <div
                key={card.id}
                className="col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >

                {/* ORIGINAL CARD */}
                <div className="service-item position-relative overflow-hidden">

                  <div className="service-img">
                    <img
                      src={imageUrl}
                      alt={title}
                      className="img-fluid w-100"
                    />
                  </div>

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