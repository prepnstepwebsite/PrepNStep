import "react";
import "./footer.scss";

import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter-alt-circle.png"; // Use a clear naming convention
import instagram from "../../assets/icons/instagram.png";
import tiktok from "../../assets/icons/tik-tok.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>How It Works</h4>
          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Transformations</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Our Menu</h4>
          <ul>
            <li>
              <a href="#">Goal Driven Plans</a>
            </li>
            <li>
              <a href="#">Custom Meals</a>
            </li>
            <li>
              <a href="#">The Fit Club</a>
            </li>
            <li>
              <a href="#">Build your plan</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <div className="contact">
            <ul>
              <li>400 S. Orange Ave</li>
              <li>South Orange, NJ</li>
              <li>555-0100​​</li>
              <li>prepandstep@inc.com</li>
            </ul>
          </div>
        </div>
        <div className="newsletter-social-wrapper">
          <div className="newsletter-signup">
            <h4>SIGN UP FOR EXCLUSIVE OFFERS</h4>
            <div className="input-wrapper">
              <input type="text" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="social-media">
            <img src={facebook} alt="Facebook" className="social-icon" />
            <img src={twitter} alt="Twitter" className="social-icon" />
            <img src={instagram} alt="Instagram" className="social-icon" />
            <img src={tiktok} alt="TikTok" className="social-icon" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 PrepNStep</p>
        <div className="footer-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
