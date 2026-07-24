import "./platform-solution-section.css";
import DashboardDemo from "./DashboardDemo";

const solutions = [
  {
    title: "HMRC Compliance",
    description:
      "Stay compliant with RTI submissions, PAYE requirements, and pension regulations.",
  },
  {
    title: "P45 & P60 Management",
    description:
      "Generate employee tax documents quickly and accurately.",
  },
  {
    title: "Payroll Reporting",
    description:
      "Access reports on payroll costs, deductions, and employee earnings whenever you need them.",
  },
];

const PlatformSolutionsSection = () => {
  return (
    <section className="platform-solutions">
      <div className="platform-solutions-container">
        {/* Left Image */}

        <div className="platform-image-wrapper">
          <DashboardDemo />
        </div>

        {/* Right Content */}

        <div className="platform-content">
          <p className="platform-heading subheading">
            One platform, Unlimited Payroll Possibilities
            {/* <br /> */}
            
          </p>

          <div className="solution-list">
            {solutions.map((item, index) => (
              <div
                key={index}
                className={`solution-item ${
                  index !== solutions.length - 1
                    ? "with-border"
                    : ""
                }`}
              >
                <h3 className = "body-4">{item.title}</h3>
                <p className = "body-5">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSolutionsSection;