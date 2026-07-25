import "./client-review-section.css";

const testimonials = [
  {
    logo: "/assets/images/thinkgroup-logo.png",
    quote:
      "Cedar Payroll transformed our payroll operations and gave us confidence that every payroll cycle would be accurate and compliant.",
    name: "Sam Quinn",
    role: "Payroll Manager",
  },
  {
    logo: "/assets/images/coco-logo.png",
    quote:
      "Cedar Payroll streamlined our complex multi-location payroll and eliminated the errors we used to struggle with. Now every cycle runs smoothly and our team has complete peace of mind.",
    name: "Laura Chen",
    role: "HR & Payroll Director",
  },
  {
    logo: "/assets/images/hats-logo.png",
    quote:
      "Switching to Cedar Payroll was a game-changer. The compliance features keep us aligned with regulations, and the automation saves hours of manual work each month.",
    name: "David Morales",
    role: "Payroll Supervisor",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-heading">
          What Our Clients Say
        </h2>

        <div className="testimonials-list">
          {testimonials.map((item, index) => (
            <div className="testimonial-row" key={index}>
              <div className="testimonial-logo">
                <img src = {item.logo}
                  alt="Client Logo"
                />
              </div>

              <div className="testimonial-divider"></div>

              <div className="testimonial-content">
                <p className="testimonial-quote">
                  "{item.quote}"
                </p>

                <h4 className="testimonial-name">
                  – {item.name}
                </h4>

                <p className="testimonial-role">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;