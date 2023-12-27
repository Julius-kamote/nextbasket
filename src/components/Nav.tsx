import { FiChevronDown } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";

function Nav() {
  return (
    <nav>
      <div>
        <h1>Bandage</h1>
        <ul>
          <li>Home</li>
          <li>
            Shop <FiChevronDown />
          </li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Pages</li>
        </ul>
      </div>

      <ul>
        <li>
          <MdOutlinePerson />
          <a href="#">Login</a>
          <span> / </span>
          <a href="#">Register</a>
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
