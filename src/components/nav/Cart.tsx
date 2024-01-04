/*eslint-disable */

import { IoMdClose } from "react-icons/io";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
// @ts-ignore
function Cart({
  // @ts-ignore
  handleShowCart, // @ts-ignore
  addCart, // @ts-ignore
  handleRemoveCart, // @ts-ignore
  increase, // @ts-ignore
  decrease, // @ts-ignore
}) {
  // @ts-ignore
  let cartTotalQty = addCart.reduce(
    // @ts-ignore
    (accum, item) => accum + item?.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <div className="content">
        <IoMdClose className="close" onClick={handleShowCart} />
        <div className="cart-list">
          {addCart.map((cartlist: any) => (
            <div className="cart" key={cartlist?.id}>
              <img src={cartlist?.thumbnail} alt="demoImages" />
              <p>{cartlist?.title}</p>
              <div className="quantity">
                <CiSquareMinus
                  className="icon"
                  onClick={() => {
                    decrease(cartlist.id);
                  }}
                />
                <span>{cartlist?.quantity}</span>
                <CiSquarePlus
                  className="icon"
                  onClick={() => {
                    increase(cartlist.id);
                  }}
                />
              </div>
              <button
                onClick={() => {
                  handleRemoveCart(cartlist.id);
                }}
              >
                Remove
              </button>
            </div>
          ))}
          {cartTotalQty <= 0 ? <p>Empty Cart</p> : ""}
        </div>
        <div>
          <p>Total: {cartTotalQty}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
