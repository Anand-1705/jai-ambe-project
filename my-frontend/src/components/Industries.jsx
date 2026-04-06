function Industries() {
  const imageUrl = data?.image?.url;
  const API_URL = "https://renowned-unity-60b52ac485.strapiapp.com";
  return (
    <section id="industries" className="section-padding bg-light">
      <div className="container text-center">
        <h2>Industries</h2>
        <img src={
                    imageUrl?.startsWith("http")
                      ? imageUrl
                      : API_URL + imageUrl
                  } />
      </div>
    </section>
  );
}

export default Industries;