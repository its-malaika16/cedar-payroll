import "./home-hero-section.css";

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1>
          YOUR PEOPLE,
          <br />
          PAID RIGHT
        </h1>

        <div className="hero-divider"></div>

        <p>
          PROFESSIONAL PAYROLL
          <br />
          SERVICES & SOFTWARE
        </p>

        <button className="hero-btn">
          Get a Quote
        </button>
      </div>

      <div className="hero-image-section">
        <svg
          className="red-curve"
          viewBox="0 0 1000 700"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0,0
              C40,480 320,700 1000,700
              L1000,0Z"
            fill="#e31b23"
          />
        </svg>

        <img src = "/assets/images/homeheroimg.png" className = "hero-image" />
      </div>
    </section>
  );
};

export default HeroBanner;
