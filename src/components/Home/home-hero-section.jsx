import "./home-hero-section.css";
import { Link } from "react-router-dom";

const HomeHeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="main-title hero-title">
          Your People, Paid Right
        </h1>

        <p className="hero-description body-3-2">
          From managed payroll services to powerful software
          solutions, we ensure your employees are paid
          accurately and on time, every time.
        </p>

        <Link to="/contact" className="hero-btn">
          Get in touch
        </Link>
      </div>
    </section>
  );
};

export default HomeHeroSection;