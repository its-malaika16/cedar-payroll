import "./industries-section.css";

const industries = [
  {
    title: "Hospitality",
    image: "/assets/images/hospitality.png",
    description:
      "From restaurants and hotels to cafés, we handle the complex shift patterns, tips, and rotas that hospitality payroll demands, accurately and on time.",
  },
  {
    title: "Retail",
    image: "/assets/images/retail.png",
    description:
      "Multi-site retail businesses trust us with variable hours, seasonal staff, and high-volume payroll runs, all delivered with built-in HMRC compliance.",
  },
  {
    title: "Construction",
    image: "/assets/images/construction.png",
    description:
      "CIS-ready payroll for subcontractors plus PAYE for permanent staff, with detailed cost reporting per site and project.",
  },
  {
    title: "Technology",
    image: "/assets/images/technology.png",
    description:
      "Payroll support for tech companies with flexible pay structures, remote teams, contractor payments, and full HMRC compliance.",
  },
  {
    title: "Healthcare",
    image: "/assets/images/healthcare.png",
    description:
      "From private clinics to care homes, we manage rotas, statutory payments, and pension auto enrolment with the sensitivity healthcare requires.",
  },
  {
    title: "Education",
    image: "/assets/images/education.png",
    description:
      "Payroll services for schools, colleges, and training centres, managing staff salaries, pensions, and compliance accurately and confidentially.",
  },
];

const IndustriesSection = () => {
  return (
    <section className="industries-section">
      <div className="industries-container">
        <h2 className="industries-heading">
          Industries We Serve
        </h2>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div className="industry-card" key={index}>
              <img src = {industry.image} />

              <div className="industry-content">
                <h3 className="industry-title">
                  • {industry.title}
                </h3>

                <p className="industry-description">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;