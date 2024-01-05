import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-header">
        <div className="social-media">
          <h1>Bandage</h1>
          <div>
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-links">
        <ul>
          <h2>Company Info</h2>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Carrier</a>
          </li>
          <li>
            <a href="#">We are hiring</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <ul>
          <h2>Legal</h2>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Carrier</a>
          </li>
          <li>
            <a href="#">We are hiring</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <ul>
          <h2>Fetures</h2>
          <li>
            <a href="#">Business Marketing</a>
          </li>
          <li>
            <a href="#">User Analytic</a>
          </li>
          <li>
            <a href="#">Live Chat</a>
          </li>
          <li>
            <a href="#">Unlimited Support</a>
          </li>
        </ul>
        <ul>
          <h2>Resources</h2>
          <li>
            <a href="#">IOS & Android</a>
          </li>
          <li>
            <a href="#">Watch a Demo</a>
          </li>
          <li>
            <a href="#">Customers</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
        </ul>
        <div className="get-in-touch">
          <h2>Get In Touch</h2>
          <div>
            <input type="text" placeholder="Your Email" />
            <button>Suscribe</button>
          </div>
          <p>Lore imp sum dolor Amit</p>
        </div>
      </div>
      <div className="all-right-reserved">
        <p>Made With Love By Finland All Right Reserved </p>
      </div>
    </div>
  );
}

export default Footer;
