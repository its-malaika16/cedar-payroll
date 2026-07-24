import "./feature-detail-section.css";

const features = [
    {
        title: "Time-sheet Management",
        description:
            "Track working hours, overtime, and attendance with ease.",
        icon: "/assets/icons/clock.svg",
        imageRight: true,
        leftPoints: [
            "Daily, weekly, and monthly time-sheets",
            "Holiday and absence management",
            "Integration with payroll calculations",
        ],
        rightPoints: [
            "Overtime calculation and tracking",
            "Manager approval workflows",
            "Export to various formats",
        ],
    },
    {
        title: "Payroll & Payslip Generation",
        description:
            "Calculate pay, deductions, and generate detailed payslips.",
        icon: "/assets/icons/boxtick.svg",
        imageRight: false,
        leftPoints: [
            "Gross to net pay calculations",
            "PAYE income tax calculations",
            "National Insurance contributions",
        ],
        rightPoints: [
            "Pension auto-enrolment deductions",
            "Student loan repayments",
            "Statutory payments (SSP, SMP, SPP)",
        ],
    },
    {
        title: "Employee Self-Service Portal",
        description:
            "Employees can access their payslips and documents securely.",
        icon: "/assets/icons/employee.svg",
        imageRight: true,
        leftPoints: [
            "Secure email-based access",
            "View and download payslips",
            "Access P45 and P60 documents",
        ],
        rightPoints: [
            "Update personal information",
            "Submit timesheet entries",
            "Request holiday and time off",
        ],
    },

     {
        title: "UK Compliance & Reporting",
        description:
            "Stay compliant with all HMRC regulations and requirements.",
        icon: "/assets/icons/report.svg",
        imageRight: false,
        leftPoints: [
            "Real-Time Information (RTI) submissions",
            "Gender pay gap reporting",
            "Apprenticeship levy calculations",
        ],
        rightPoints: [
            "NI category management",
            "Automatic tax code updates",
            "Pension regulatory compliance",
        ],
    },

    {
        title: "Employee Information Management",
        description:
            "Centralise all your employee data in one secure, GDPR-compliant platform.",
        icon: "/assets/icons/group.svg",
        imageRight: true,
        leftPoints: [
            "Personal details and contact information",
            "Bank account details for payments",
            "Emergency contacts",
        ],
        rightPoints: [
            "Employment history and contracts",
            "Tax codes and NI numbers",
            "Document storage and management",
        ],
    },

    {
        title: "P45 & P60 Generation",
        description:
            "Generate HMRC-compliant P45 and P60 documents automatically.",
        icon: "/assets/icons/tick.svg",
        imageRight: false,
        leftPoints: [
            "Automatic P45 on employee departure",
            "Digital delivery via employee portal",
            "Bulk generation capabilities",
        ],
        rightPoints: [
            "Year-end P60 generation for all staff",
            "Print-ready PDF formats",
            "HMRC submission ready",
        ],
    },
];

const PayrollFeaturesSection = () => {
    return (
        <section className="payroll-features-section">
            <div className="payroll-features-container">
                {features.map((feature, index) => (
                    <div
                        className={`feature-block ${feature.imageRight ? "image-right" : "image-left"
                            }`}
                        key={index}
                    >
                        {/* Icon Left */}

                        {!feature.imageRight && (
                            <div className="feature-icon-area">
                                <div className="feature-icon-card">
                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                        className="feature-icon"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Content */}

                        <div className="feature-content">
                            <h2 className="feature-heading subheading">
                                {feature.title}
                            </h2>

                            <p className="feature-desc body-6">
                                {feature.description}
                            </p>

                            <div className="feature-lists body-5">
                                <ul>
                                    {feature.leftPoints.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>

                                <ul>
                                    {feature.rightPoints.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Icon Right */}

                        {feature.imageRight && (
                            <div className="feature-icon-area">
                                <div className="feature-icon-card">
                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                        className="feature-icon"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PayrollFeaturesSection;