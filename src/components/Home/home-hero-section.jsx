import { useState } from "react";
import "./home-hero-section.css";
import ContactModal from "./contact-modal";

const HomeHeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="main-title hero-title">
            Your People, Paid Right
          </h1>

          <p className="hero-description body-3-2">
            From managed payroll services to powerful
            software solutions, we ensure your employees
            are paid accurately and on time, every time.
          </p>

          <button
            className="hero-btn"
            onClick={() => setShowModal(true)}
          >
            Get in touch
          </button>
        </div>
      </section>

      {showModal && (
        <ContactModal
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default HomeHeroSection;