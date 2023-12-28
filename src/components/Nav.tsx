import { FiChevronDown } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div>
        <h1>Bandage</h1>
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">
              Shop <FiChevronDown />
            </Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Blog</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
          <li>
            <Link to="">Pages</Link>
          </li>
        </ul>
      </div>

      <ul>
        <li>
          <MdOutlinePerson />
          <Link to="">Login</Link>
          <span> / </span>
          <Link to="">Register</Link>
        </li>
        <li>
          <FiSearch />
        </li>
        <li>
          <BsCart />
          <span>1</span>
        </li>
        <li>
          <IoIosHeartEmpty />
          <span>1</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
