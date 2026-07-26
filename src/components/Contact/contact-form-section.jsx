import "./contact-form-section.css";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">
          Get Started
        </h2>

        <p className="contact-subtitle">
          Get pricing specific to your business.
        </p>

        <form className="contact-form">
          <div className="contact-row">
            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="contact-row">
            <input
              type="tel"
              placeholder="Phone Number"
            />

            <input
              type="text"
              placeholder="Business Name"
            />
          </div>

          <div className="contact-row">
            <input
              type="number"
              placeholder="Number of Employees"
            />

            <select>
  {/* Preferred options first */}
  <option>United States</option>
  <option>United Kingdom</option>
  <option>UAE</option>
  <option>Lebanon</option>

  {/* Other countries */}
  <option>Afghanistan</option>
  <option>Albania</option>
  <option>Algeria</option>
  <option>Andorra</option>
  <option>Angola</option>
  <option>Argentina</option>
  <option>Armenia</option>
  <option>Australia</option>
  <option>Austria</option>
  <option>Azerbaijan</option>
  <option>Bahrain</option>
  <option>Bangladesh</option>
  <option>Belarus</option>
  <option>Belgium</option>
  <option>Belize</option>
  <option>Benin</option>
  <option>Bhutan</option>
  <option>Bolivia</option>
  <option>Bosnia and Herzegovina</option>
  <option>Botswana</option>
  <option>Brazil</option>
  <option>Brunei</option>
  <option>Bulgaria</option>
  <option>Burkina Faso</option>
  <option>Burundi</option>
  <option>Cambodia</option>
  <option>Cameroon</option>
  <option>Canada</option>
  <option>Cape Verde</option>
  <option>Central African Republic</option>
  <option>Chad</option>
  <option>Chile</option>
  <option>China</option>
  <option>Colombia</option>
  <option>Comoros</option>
  <option>Congo</option>
  <option>Costa Rica</option>
  <option>Croatia</option>
  <option>Cuba</option>
  <option>Cyprus</option>
  <option>Czech Republic</option>
  <option>Denmark</option>
  <option>Djibouti</option>
  <option>Dominica</option>
  <option>Dominican Republic</option>
  <option>Ecuador</option>
  <option>Egypt</option>
  <option>El Salvador</option>
  <option>Estonia</option>
  <option>Eswatini</option>
  <option>Ethiopia</option>
  <option>Fiji</option>
  <option>Finland</option>
  <option>France</option>
  <option>Gabon</option>
  <option>Gambia</option>
  <option>Georgia</option>
  <option>Germany</option>
  <option>Ghana</option>
  <option>Greece</option>
  <option>Guatemala</option>
  <option>Guinea</option>
  <option>Guyana</option>
  <option>Haiti</option>
  <option>Honduras</option>
  <option>Hungary</option>
  <option>Iceland</option>
  <option>India</option>
  <option>Indonesia</option>
  <option>Iran</option>
  <option>Iraq</option>
  <option>Ireland</option>
  <option>Israel</option>
  <option>Italy</option>
  <option>Jamaica</option>
  <option>Japan</option>
  <option>Jordan</option>
  <option>Kazakhstan</option>
  <option>Kenya</option>
  <option>Kuwait</option>
  <option>Kyrgyzstan</option>
  <option>Laos</option>
  <option>Latvia</option>
  <option>Libya</option>
  <option>Lithuania</option>
  <option>Luxembourg</option>
  <option>Madagascar</option>
  <option>Malawi</option>
  <option>Malaysia</option>
  <option>Maldives</option>
  <option>Mali</option>
  <option>Malta</option>
  <option>Mauritania</option>
  <option>Mauritius</option>
  <option>Mexico</option>
  <option>Moldova</option>
  <option>Monaco</option>
  <option>Mongolia</option>
  <option>Montenegro</option>
  <option>Morocco</option>
  <option>Mozambique</option>
  <option>Myanmar</option>
  <option>Namibia</option>
  <option>Nepal</option>
  <option>Netherlands</option>
  <option>New Zealand</option>
  <option>Nicaragua</option>
  <option>Niger</option>
  <option>Nigeria</option>
  <option>North Korea</option>
  <option>North Macedonia</option>
  <option>Norway</option>
  <option>Oman</option>
  <option>Pakistan</option>
  <option>Panama</option>
  <option>Papua New Guinea</option>
  <option>Paraguay</option>
  <option>Peru</option>
  <option>Philippines</option>
  <option>Poland</option>
  <option>Portugal</option>
  <option>Qatar</option>
  <option>Romania</option>
  <option>Russia</option>
  <option>Rwanda</option>
  <option>Saudi Arabia</option>
  <option>Senegal</option>
  <option>Serbia</option>
  <option>Singapore</option>
  <option>Slovakia</option>
  <option>Slovenia</option>
  <option>Somalia</option>
  <option>South Africa</option>
  <option>South Korea</option>
  <option>Spain</option>
  <option>Sri Lanka</option>
  <option>Sudan</option>
  <option>Suriname</option>
  <option>Sweden</option>
  <option>Switzerland</option>
  <option>Syria</option>
  <option>Taiwan</option>
  <option>Tajikistan</option>
  <option>Tanzania</option>
  <option>Thailand</option>
  <option>Togo</option>
  <option>Trinidad and Tobago</option>
  <option>Tunisia</option>
  <option>Turkey</option>
  <option>Turkmenistan</option>
  <option>Uganda</option>
  <option>Ukraine</option>
  <option>Uruguay</option>
  <option>Uzbekistan</option>
  <option>Venezuela</option>
  <option>Vietnam</option>
  <option>Yemen</option>
  <option>Zambia</option>
  <option>Zimbabwe</option>
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
            className="contact-btn"
          >
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;