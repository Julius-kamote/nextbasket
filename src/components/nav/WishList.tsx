/*eslint-disable */

import { IoMdClose } from "react-icons/io";
// import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

function WishList({
  // @ts-ignore
  handleShowCart, // @ts-ignore
  addToWistList, // @ts-ignore
  addWishList, // @ts-ignore
  handleRemoveWish, // @ts-ignore
}) {
  let cartTotalQty = addWishList.reduce(
    // @ts-ignore
    (accum, item) => accum + item.quantity,
    0
  );

  return (
    <div className="container">
      <div className="content">
        <IoMdClose className="close" onClick={handleShowCart} />
        <div className="cart-list">
          {addWishList.map((wishlist: any) => (
            <div className="cart" key={wishlist.id}>
              <img src={wishlist.thumbnail} alt="demoImages" />
              <p>{wishlist.title}</p>
              <div className="quantity">
                {/* <CiSquareMinus className="icon" />
                <span>{cartlist.quantity}</span>
                <CiSquarePlus className="icon" /> */}
              </div>
              <button
                onClick={() => {
                  handleRemoveWish(wishlist.id);
                }}
              >
                Remove
              </button>
            </div>
          ))}
          {cartTotalQty <= 0 ? <p>Empty Wish List</p> : ""}
        </div>

        <div>
          <p>Wish List Item: {cartTotalQty}</p>
        </div>
      </div>
    </div>
  );
}

export default WishList;
