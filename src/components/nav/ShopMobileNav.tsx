import { BsCart } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlinePerson } from "react-icons/md";
import { Link } from "react-router-dom";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useState } from "react";

function HomeMobileNav() {
  const [show, setShow] = useState(false);

  const onShow = () => {
    setShow(!show);
  };

  return (
    <div className="shop-mobile-nav">
      <div>
        <h1>Bandage</h1>
        <ul>
          <li className="burger" onClick={onShow}>
            <HiMiniBars3BottomRight />
          </li>
        </ul>
      </div>
      {show ? (
        <>
          <ul className="links">
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="shop">Shop</Link>
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
          </ul>
          <ul>
            <li className="log-reg">
              <MdOutlinePerson className="icon" />
              <Link to="">Login</Link> <span>/</span>{" "}
              <Link to="">Register</Link>
            </li>
            <li>
              <FiSearch />
            </li>
            <li>
              <BsCart />
              <span className="count">1</span>
            </li>
            <li>
              <IoIosHeartEmpty />
              <span className="count">1</span>
            </li>
          </ul>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default HomeMobileNav;
