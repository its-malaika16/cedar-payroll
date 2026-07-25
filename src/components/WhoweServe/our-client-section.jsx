import "./our-client-section.css";

const logos = [
  "/assets/images/ark-logo.png",
  "/assets/images/bunzl-logo.png",
  "/assets/images/Harris-logo.png",
  "/assets/images/mams-logo.png",
  "/assets/images/showcase-logo.jpg",
  "/assets/images/coco-logo.png",
  "/assets/images/hats-logo.png",
  "/assets/images/teachwise-logo.png",
  "/assets/images/thinkgroup-logo.png",
  "/assets/images/tps-logo.png",
];

const ClientsSection = () => {
  return (
    <section className="clients-section">
      <div className="clients-container">
        <h2 className="clients-heading">
          Our Clients
        </h2>

        <div className="clients-slider">
          <div className="clients-track">
            {[...logos, ...logos].map((logo, index) => (
              <div className="client-logo" key={index}>
                <img src = {logo} alt="Client Logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;