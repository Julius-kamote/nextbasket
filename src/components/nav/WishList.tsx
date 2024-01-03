import { IoMdClose } from "react-icons/io";
// import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

function WishList({
  handleShowCart,
  addToWistList,
  addWishList,
  handleRemove,
}) {
  let cartTotalQty = addWishList.reduce(
    (accum, item) => accum + item.quantity,
    0
  );

  return (
    <div className="container">
      <div className="content">
        <IoMdClose className="close" onClick={handleShowCart} />
        <div className="cart-list">
          {addWishList.map((wishlist) => (
            <div className="cart" key={wishlist.id}>
              <img src={wishlist.thumbnail} alt="" />
              <p>{wishlist.title}</p>
              <div className="quantity">
                {/* <CiSquareMinus className="icon" />
                <span>{cartlist.quantity}</span>
                <CiSquarePlus className="icon" /> */}
              </div>
              <button
                onClick={() => {
                  handleRemove(wishlist.id);
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
