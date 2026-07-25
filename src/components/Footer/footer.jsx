import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-box">
      <div className="footer-container">

        {/* Left */}

        <div className="footer-left">
          <img src = "/assets/logo/payrolllogo.svg" />

          <p className="footer-tagline">
            Your People, Paid Right
          </p>

          <div className="footer-contact">

            <div className="contact-item">
              <img src = "/assets/icons/phone.svg" />
              <span>+44 (0) 20 1234 5678</span>
            </div>

            <div className="contact-item">
              <img src = "/assets/icons/email.svg" />
              <span>support@cedarpayroll.com</span>
            </div>

            <div className="contact-item">
              <img src = "/assets/icons/location.svg" />
              <span>United Kingdom</span>
            </div>

            <div className="contact-item">
              <img src = "/assets/icons/clock.svg" />          
              <span>Mon - Fri, 9:00 AM - 5:30 PM</span>
            </div>

          </div>
        </div>

        {/* Right */}

        <div className="footer-right">

          <div className="footer-column">
            <h4>What We Offer</h4>

            <Link to="/services">
              Services
            </Link>

            <Link to="/payroll-for-employees">
              Payroll for Employees
            </Link>

            <Link to="/how-it-works">
              How It Works
            </Link>

            <Link to="/growing-businesses">
              For Growing Businesses
            </Link>
          </div>

          <div className="footer-column">
            <h4>Who We Serve</h4>

            <Link to="/industries">
              Industries We Serve
            </Link>

            <Link to="/clients">
              Our Clients
            </Link>

            <Link to="/success-stories">
              Client Success Stories
            </Link>

            <Link to="/testimonials">
              Testimonials
            </Link>
          </div>

          <div className="footer-column">
            <h4>About Cedar Payroll</h4>

            <Link to="/about">
              Our Mission
            </Link>

            <Link to="/about">
              Our Vision
            </Link>

            <Link to="/about">
              Core Values
            </Link>

            <Link to="/about">
              Global Presence
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom */}

      <div className="footer-bottom">
        <Link to="/privacy-policy">
          Privacy Policy
        </Link>

        <span>|</span>

        <Link to="/cookie-policy">
          Cookie Policy
        </Link>

        <span>|</span>

        <Link to="/terms-and-conditions">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;