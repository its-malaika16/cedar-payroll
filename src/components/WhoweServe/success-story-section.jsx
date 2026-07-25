import "./success-story-section.css";

const successStories = [
    {
        company: "COCO GRILL",
        subtitle: "Multi-Site Hospitality Group",
        logo: "/assets/images/coco-logo.png",

        challenge:
            "A rapidly growing hospitality organisation operating across multiple locations was managing payroll through several disconnected processes. This resulted in time-consuming administration, inconsistent reporting, and increased operational complexity.",

        solution:
            "Cedar Payroll implemented a fully managed payroll service supported by cloud-based reporting tools and dedicated payroll specialists.",

        results: [
            "Reduced payroll processing time by 60%",
            "Improved reporting accuracy across all locations",
            "Enhanced compliance management",
            "Greater visibility of payroll costs and workforce data",
        ],
    },

    {
        company: "TEACHWISE",
        subtitle: "Professional Services Organisation",
        logo: "/assets/images/teachwise-logo.png",

        challenge:
            "A growing professional services firm required a scalable payroll solution capable of supporting business growth while maintaining data security and compliance.",

        solution:
            "Cedar Payroll introduced a managed payroll service with employee self-service functionality and enhanced reporting capabilities.",

        results: [
            "Scalable payroll infrastructure for future growth",
            "Improved employee access to payroll information",
            "Reduced internal administrative workload",
            "Secure and compliant payroll processing",
        ],
    },

    {
        company: "MAMS",
        subtitle: "Manufacturing Business",
        logo: "/assets/images/mams-logo.png",

        challenge:
            "A manufacturing company employing both salaried and hourly workers required a  payroll solution capable of managing complex pay structures, overtime  calculations, and multiple payroll schedules.",

        solution:
            "Cedar Payroll worked closely with the company to implement customised payroll  processes tailored to its workforce requirements.",

        results: [
            "Increased payroll accuracy",
            "Reduced payroll-related queries",
            "Simplified payroll administration",
            "Improved operational efficiency",
        ],
    },
];

const ClientSuccessSection = () => {
    return (
        <section className="client-success-section">
            <div className="client-success-container">
                <div className="client-success-header">
                    <h2 className="client-success-title">
                        Client Success Stories
                    </h2>

                    <p className="client-success-subtitle">
                        Delivering results through trusted payroll
                        partnerships
                    </p>

                    <p className="client-success-description">
                        At Cedar Payroll, we measure our success by the
                        success of our clients. Every organisation has
                        unique payroll challenges, and our team is
                        committed to delivering tailored solutions that
                        improve efficiency, compliance, and overall
                        business performance.
                    </p>
                </div>

                <div className="success-cards">
                    {successStories.map((story, index) => (
                        <div className="success-card" key={index}>
                            <div className="card-header">
                                <div>
                                    <h3 className="company-name">
                                        {story.company}
                                    </h3>

                                    <p className="company-subtitle">
                                        {story.subtitle}
                                    </p>
                                </div>

                                <div className="company-logo" > <img src={story.logo} /> </div>

                            </div>

                            <div className="content-block">
                                <h4>Challenge:</h4>
                                <p>{story.challenge}</p>
                            </div>

                            <div className="divider"></div>

                            <div className="content-block">
                                <h4>Solution:</h4>
                                <p>{story.solution}</p>
                            </div>

                            <div className="divider"></div>

                            <div className="content-block">
                                <h4>Results:</h4>

                                <ul>
                                    {story.results.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientSuccessSection;