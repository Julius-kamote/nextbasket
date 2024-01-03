import { IoMdClose } from "react-icons/io";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

function Cart({ handleShowCart, addCart, handleRemove, increase, decrease }) {
  let cartTotalQty = addCart.reduce(
    (accum, item) => accum + item?.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <div className="content">
        <IoMdClose className="close" onClick={handleShowCart} />
        <div className="cart-list">
          {addCart.map((cartlist) => (
            <div className="cart" key={cartlist?.id}>
              <img src={cartlist?.thumbnail} alt="" />
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
                  handleRemove(cartlist.id);
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
