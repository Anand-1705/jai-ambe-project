import { useEffect, useState } from "react";

const API_URL = "https://renowned-unity-60b52ac485.strapiapp.com";

function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/about?populate=*`)
      .then((res) => res.json())
      .then((res) => {
        console.log("ABOUT API:", res);
        setData(res.data); // correct for single type
      })
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p className="text-center mt-5">Loading...</p>;

  // rich text extraction
  const description =
    data.description?.[0]?.children?.[0]?.text || "";

  //  Dynamic image from Strapi
  const imageUrl = data.image?.url
    ? API_URL + data.image.url
    : null;

  return (
    <section id="about" className="section-padding bg-light">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-lg-6">
            <h2>{data.title}</h2>

            <p>{description}</p>

            <div className="d-flex gap-4 mt-3">
              <div>
                <h4 className="text-info">
                  {data.experience || 0}+
                </h4>
                <p>Years Experience</p>
              </div>

              <div>
                <h4 className="text-info">
                  {data.products || 0}+
                </h4>
                <p>Products</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="About"
                className="img-fluid rounded"
              />
            ) : (
              <p>No Image</p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;