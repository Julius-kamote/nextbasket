import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <div
      className={location.pathname === "/" ? "header" : "header header-shop"}
    >
      <div>
        <p>
          <FiPhone /> (225 555-0118)
        </p>
        <p>
          <TfiEmail /> michelle.rivera@example.com
        </p>
      </div>
      <div>
        <p>Follow Us and get a chance to win 80% off</p>
      </div>
      <ul>
        <li>Follow Us:</li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaYoutube />
        </li>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaTwitter />
        </li>
      </ul>
    </div>
  );
}

export default Header;
