import "./features-grid-section.css";

const features = [
  {
    icon: "/assets/icons/group.svg",
    title: "Employee Management",
    description:
      "Store and manage all your employee information securely.",
  },
  {
    icon: "/assets/icons/portal.svg",
    title: "Employee Portal",
    description:
      "Employees access payslips securely.",
  },

  {
    icon: "/assets/icons/clock.svg",
    title: "Timesheet Management",
    description:
      "Track working hours, overtime, and attendance.",
  },
  {
    icon: "/assets/icons/dollar.svg",
    title: "Tax & NIC Calculations",
    description:
      "Accurate PAYE and pension calculations.",
  },
  {
    icon: "/assets/icons/cloud.svg",
    title: "Payslip Generation",
    description:
      "Generate detailed payslips instantly.",
  },
  {
    icon: "/assets/icons/Star.svg",
    title: "P45 & P60 Generation",
    description:
      "Generate compliant documents with just a few clicks.",
  },
];

const FeaturesGridSection = () => {
  return (
    <section className="payroll-platform">
      <div className="payroll-platform-container">
        {/* Left Side */}
        <div className="platform-content">
          <h2 className="platform-title subtitle-1">
            Everything
            <br />
            You Need
            <br />
            for <span>Payroll</span>
          </h2>

          <p className="platform-description body-3-2">
            From employee management to tax calculations,
            our comprehensive platform handles every aspect
            of payroll processing.
          </p>
        </div>

        {/* Right Side */}
        <div className="platform-features">
          {features.map((feature, index) => (
            <div className="platform-feature-card" key={index}>
              <div className="feature-icon-wrapper">
                <img src={feature.icon} />
              </div>

              <h3 className="feature-title body-3-2">
                {feature.title}
              </h3>

              <p className="feature-description body-3">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGridSection;