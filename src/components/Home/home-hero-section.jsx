import "./home-hero-section.css";

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <img src = "assets/images/homeherosection.svg" className = "hero-image"/>

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

      <div className="hero-features">
        <div className="hero-feature">
          <span>✓</span>
          <p>Automated tax calculations</p>
        </div>

        <div className="hero-feature">
          <span>✓</span>
          <p>Employee self-service portal</p>
        </div>

        <div className="hero-feature">
          <span>✓</span>
          <p>Real-time reporting</p>
        </div>

        <div className="hero-feature">
          <span>✓</span>
          <p>Pension auto-enrolment</p>
        </div>

        <div className="hero-feature">
          <span>✓</span>
          <p>P45, P60 generation</p>
        </div>

        <div className="hero-feature">
          <span>✓</span>
          <p>Holiday tracking</p>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;