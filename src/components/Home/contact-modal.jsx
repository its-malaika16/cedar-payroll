import "./contact-modal.css";
import { Link } from "react-router-dom";

const ContactModal = ({ onClose }) => {
    return (
        <div
            className="modal-overlay"
            onClick={onClose}
        >
            <div
                className="modal-container"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="modal-close"
                    onClick={onClose}
                >

                </button>

                <h2 className="modal-title">
                    Get Started
                </h2>

                <p className="modal-subtitle">
                    Get pricing specific to your business.
                </p>

                <form className="modal-form">
                    <div className="modal-row">

                        <input
                            type="text"
                            placeholder="Full Name"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                        />
                    </div>

                    <div className="modal-row">
                        <input
                            type="tel"
                            placeholder="Phone Number"
                        />

                        <input
                            type="text"
                            placeholder="Business Name"
                        />
                    </div>

                    <div className="modal-row">
                        <input
                            type="number"
                            placeholder="number of Employees"
                        />

                        <select>
                            <option>United States</option>
                            <option>United Kingdom</option>
                            <option>UAE</option>
                            <option>Lebanon</option>
                        </select>
                    </div>

                    <p className="privacy-line">
                        By clicking Contact Us, you acknowledge that you have read our{" "}
                        <Link to="/privacy" className="highlight-red">
                            <strong>Privacy Statement</strong>
                        </Link>{" "}
                        and agree to our{" "}
                        <Link to="/terms" className="highlight-red">
                            <strong>Terms of Use</strong>
                        </Link>
                        .
                    </p>

                    <button
                        type="submit"
                        className="pricing-btn"
                    >
                        Contact Us
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;