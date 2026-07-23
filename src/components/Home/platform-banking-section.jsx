import "./platform-banking-section.css";

const services = [
  {
    title: "Employee Records",
    description:
      "Keep employee information organised and up to date in one secure place.",
  },
  {
    title: "Payslip Generation",
    description:
      "Create and distribute payslips in just a few clicks.",
  },
  {
    title: "Holiday & Absence Tracking",
    description:
      "Monitor leave, sickness, and attendance alongside payroll processing.",
  },
];

const PayrollBankingSection = () => {
  return (
    <section className="payroll-banking">
      <div className="payroll-banking-container">
        {/* Left Side */}

        <div className="banking-content">
          <h2 className="banking-title subheading">
            Efficient & Reliable Payroll
          </h2>

          <div className="banking-services">
            {services.map((service, index) => (
              <div
                key={index}
                className={`banking-service ${
                  index !== services.length - 1 ? "service-border" : ""
                }`}
              >
                <h3 className = "body-4">{service.title}</h3>
                <p className = "body-5">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}

        <div className="banking-image-wrapper">
          <img className = "banking-image" src = "/assets/images/platform.png" />
        </div>
      </div>
    </section>
  );
};

export default PayrollBankingSection;