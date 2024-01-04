/*eslint-disable */

import { FiSearch } from "react-icons/fi";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useState } from "react";
import Cart from "./Cart";

function HomeMobileNav( // @ts-ignore
  handleShowCart, // @ts-ignore
  handleShowWishList, // @ts-ignore
  showCart, // @ts-ignore
  showWishList, // @ts-ignore
  addCart, // @ts-ignore
  addWishList, // @ts-ignore
  addToWistList, // @ts-ignore
  handleRemove, // @ts-ignore
  increase, // @ts-ignore
  decrease // @ts-ignore
) {
  const [show, setShow] = useState(false);

  const onShow = () => {
    setShow(!show);
  };

  return (
    <div className="home-mobile-nav">
      <>
        <div>
          <h1>Bandage</h1>
          <ul>
            <li>
              <FiSearch />
            </li>
            <li>
              <BsCart onClick={handleShowCart} />
            </li>
            <li className="burger" onClick={onShow}>
              <HiMiniBars3BottomRight />
            </li>
          </ul>
        </div>
        {show ? (
          <>
            <ul className="links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">
                <Link to="">Product</Link>
              </li>
              <li>
                <Link to="">Pricing</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
            </ul>
          </>
        ) : (
          ""
        )}
      </>
      {showCart ? (
        <Cart
          handleShowCart={handleShowCart}
          addCart={addCart} // @ts-ignore
          handleRemove={handleRemove}
          increase={increase}
          decrease={decrease}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default HomeMobileNav;
