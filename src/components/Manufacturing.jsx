import React, { useEffect, useState } from "react";

function Manufacturing() {
  const [section, setSection] = useState(null);
  const [processes, setProcesses] = useState([]);

  useEffect(() => {
    // 🔹 Fetch section (heading + main image)
    fetch("http://localhost:1337/api/manufacturing-section?populate=*")
      .then((res) => res.json())
      .then((data) => {
        setSection(data.data);
      })
      .catch((err) => console.log(err));

    // 🔹 Fetch process cards (⚠️ your spelling: manfacturing)
    fetch("http://localhost:1337/api/manfacturing-processes?populate=*")
      .then((res) => res.json())
      .then((data) => {
        setProcesses(data.data || []);
      })
      .catch((err) => console.log(err));
  }, []);

  // ✅ Safe access
  const heading =
    section?.attributes?.heading || section?.heading;

  const mainImage =
    section?.attributes?.mainImage?.data?.attributes?.url ||
    section?.mainImage?.url;

  return (
    <section id="manufacturing" className="section-padding bg-light">
      <div className="container text-center">

        {/* 🔥 Heading */}
        <h2 className="fw-bold mb-4">{heading}</h2>

        {/* 🔥 Main Image */}
        {mainImage && (
          <img
            src={`http://localhost:1337${mainImage}`}
            alt="Manufacturing"
            className="img-fluid mb-4"
            style={{
              maxWidth: "1000px",
              borderRadius: "10px",
            }}
          />
        )}

        {/* 🔥 Bigger Process Cards */}
        <div className="row justify-content-center">
          {processes.length > 0 &&
            processes.map((item, i) => {
              const title =
                item?.attributes?.title || item?.title;

              const image =
                item?.attributes?.image?.data?.attributes?.url ||
                item?.image?.url;

              return (
                <div className="col-md-3 col-6 mb-4" key={i}>
                  <div className="card p-3 shadow-sm">

                    {image && (
                      <img
                        src={`http://localhost:1337${image}`}
                        alt={title}
                        style={{
                          width: "100%",
                          height: "170px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    )}

                    <p className="mt-3 fw-semibold">{title}</p>

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