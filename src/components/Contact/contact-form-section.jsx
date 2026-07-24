import "./contact-form-section.css";

const ContactFormSection = () => {
  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <h2 className="contact-form-title subheading">
          Send Us a Message
        </h2>

        <form className="contact-form">
          {/* Row 1 */}

          <div className="form-row two-columns">
            <div className="form-group">
              <label>First Name <span className="sterric">*</span></label>
              <input
                type="text"
                placeholder="John"
              />
            </div>

            <div className="form-group">
              <label>Last Name <span className="sterric">*</span></label>
              <input
                type="text"
                placeholder="Smith"
              />
            </div>
          </div>

          {/* Email */}

          <div className="form-group">
            <label>E-mail Address <span className="sterric">*</span></label>
            <input
              type="email"
              placeholder="John@company.com"
            />
          </div>

          {/* Phone */}

          <div className="form-group">
            <label>Phone Number <span className="sterric">*</span></label>
            <input
              type="tel"
              placeholder="+44 123 456 7890"
            />
          </div>

          {/* Row 2 */}

          <div className="form-row two-columns">
            <div className="form-group">
              <label>Company Name <span className="sterric">*</span></label>
              <input
                type="text"
                placeholder="Your Company Ltd"
              />
            </div>

            <div className="form-group">
              <label>Number of Employees <span className="sterric">*</span></label>
              <input
                type="text"
                placeholder="e.g. 50"
              />
            </div>
          </div>

          {/* Message */}

          <div className="form-group">
            <label>How can we help?</label>

            <textarea
              rows="6"
              placeholder="Tell us about your payroll needs..."
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;