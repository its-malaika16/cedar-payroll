import "./serve-hero-section.css";

const IndustryBannerSection = () => {
  return (
    <section className="industry-banner">
      <div className="industry-banner-overlay"></div>

      <div className="industry-banner-content">
        <h2 className="industry-banner-title">
          Empowering Every Industry.
          <br />
          Elevating Every Team.
        </h2>

        <p className="industry-banner-description">
          From startups to enterprises, Cedar Payroll partners
          with organizations across industries to simplify
          operations, strengthen compliance, and celebrate
          success.
        </p>
      </div>
    </section>
  );
};

export default IndustryBannerSection;