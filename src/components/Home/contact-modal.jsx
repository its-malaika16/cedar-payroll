import { Link } from "react-router-dom";

const ContactModal = ({ onClose }) => {
  return (
    <>
      <style>
        {`
          .modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.6);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            padding: 20px;
            overflow-y: auto;
          }

          .modal-container {
            width: 100%;
            max-width: 1000px;
            background: #ffffff;
            padding: 50px;
            position: relative;
          }

          .modal-close {
            position: absolute;
            top: 15px;
            right: 20px;
            border: none;
            background: transparent;
            font-size: 34px;
            cursor: pointer;
            color: var(--primary);
          }

          .modal-title {
            font-size: 24px;
            font-weight: 700;
            text-align: center;
            color: var(--primary);
            margin-bottom: 10px;
          }

          .modal-subtitle {
            font-size: 20px;
            font-weight: 600;
            text-align: center;
            color: var(--primary);
            margin-bottom: 40px;
          }

          .modal-form {
            width: 100%;
          }

          .modal-row {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-bottom: 24px;
          }

          .modal-form input,
          .modal-form select {
            width: 100%;
            padding: 16px 18px;
            border: 1px solid #d9d9d9;
            font-size: 16px;
            box-sizing: border-box;
            outline: none;
          }

          .modal-form input:focus,
          .modal-form select:focus {
            border-color: var(--secondary);
          }

          .privacy-line {
            font-size: 16px;
            font-weight: 500;
            text-align: center;
            color: var(--primary);
            line-height: 1.8;
            margin: 0 20%;
          }

          .highlight-red {
            color: var(--secondary);
            text-decoration: none;
          }

          .pricing-btn {
            display: block;
            margin: 30px auto 0;
            width: 220px;
            height: 56px;
            border: none;
            border-radius: 10px;
            background: var(--secondary);
            color: #ffffff;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
          }

          /* ===== Large Desktop ===== */

          @media (min-width: 1600px) {
            .modal-container {
              max-width: 1100px;
            }

            .modal-title {
              font-size: 28px;
            }

            .modal-subtitle {
              font-size: 22px;
            }
          }

          /* ===== Desktop ===== */

          @media (max-width: 1400px) {
            .modal-container {
              max-width: 900px;
            }
          }

          /* ===== Laptop ===== */

          @media (max-width: 1200px) {
            .modal-container {
              padding: 40px;
            }

            .privacy-line {
              margin: 0 10%;
            }
          }

          /* ===== Tablet ===== */

          @media (max-width: 992px) {
            .modal-container {
              padding: 35px;
            }

            .modal-row {
              gap: 20px;
            }

            .privacy-line {
              margin: 0 5%;
            }
          }

          /* ===== Mobile ===== */

          @media (max-width: 768px) {
            .modal-container {
              padding: 30px 20px;
            }

            .modal-row {
              grid-template-columns: 1fr;
            }

            .modal-title {
              font-size: 22px;
            }

            .modal-subtitle {
              font-size: 18px;
            }

            .privacy-line {
              margin: 0;
              font-size: 14px;
            }

            .pricing-btn {
              width: 100%;
            }
          }

          /* ===== Small Mobile ===== */

          @media (max-width: 480px) {
            .modal-container {
              padding: 25px 15px;
            }

            .modal-title {
              font-size: 20px;
            }

            .modal-subtitle {
              font-size: 16px;
              margin-bottom: 25px;
            }

            .modal-form input,
            .modal-form select {
              padding: 14px;
              font-size: 14px;
            }

            .privacy-line {
              font-size: 13px;
            }

            .pricing-btn {
              height: 50px;
              font-size: 14px;
            }
          }
        `}
      </style>

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
            ×
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
                placeholder="Number of Employees"
              />

              <select>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>UAE</option>
                <option>Lebanon</option>
              </select>
            </div>

            <p className="privacy-line">
              By clicking Contact Us, you acknowledge
              that you have read our{" "}
              <Link
                to="/privacy"
                className="highlight-red"
              >
                <strong>Privacy Statement</strong>
              </Link>{" "}
              and agree to our{" "}
              <Link
                to="/terms"
                className="highlight-red"
              >
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
    </>
  );
};

export default ContactModal;