import { FiChevronDown } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import Cart from "./Cart";
import WishList from "./WishList";

function Nav({
  handleShowCart,
  handleShowWishList,
  showCart,
  showWishList,
  addCart,
  addWishList,
  addToWistList,
  handleRemove,
  increase,
  decrease,
}) {
  const location = useLocation();

  return (
    <>
      <nav className={location.pathname === "/" ? "nav" : "nav nav-shop"}>
        <div>
          <h1>Bandage</h1>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="active">
                Shop <FiChevronDown />
              </Link>
            </li>
            <li>
              <Link to="coming-soon">About</Link>
            </li>
            <li>
              <Link to="coming-soon">Blog</Link>
            </li>
            <li>
              <Link to="coming-soon">Contact</Link>
            </li>
            <li>
              <Link to="coming-soon">Pages</Link>
            </li>
          </ul>
        </div>

        <ul>
          <li>
            <MdOutlinePerson className="icon" />
            <Link to="coming-soon">Login</Link>
            <span> / </span>
            <Link to="coming-soon">Register</Link>
          </li>
          <li>
            <FiSearch />
          </li>
          <li>
            <BsCart onClick={handleShowCart} />
            <span className="count">1</span>
          </li>
          <li>
            <IoIosHeartEmpty onClick={handleShowWishList} />
            <span className="count">1</span>
          </li>
        </ul>
      </nav>
      {showCart ? (
        <Cart
          handleShowCart={handleShowCart}
          addCart={addCart}
          handleRemove={handleRemove}
          increase={increase}
          decrease={decrease}
        />
      ) : (
        ""
      )}
      {showWishList ? (
        <WishList
          handleShowCart={handleShowWishList}
          addToWistList={addToWistList}
          addWishList={addWishList}
          handleRemove={handleRemove}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Nav;
