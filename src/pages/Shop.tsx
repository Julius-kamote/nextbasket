/*eslint-disable */
import { ToastContainer } from "react-toastify";
import BestSellerProducts from "../components/home/BestSellerProducts";
import Footer from "../components/home/Footer";
import AdditionalInformation from "../components/shop/AdditionalInformation";
import Product from "../components/shop/Product";
// @ts-ignore
function Shop({
  product,
  addToCart,
  addToWistList,
  itemID,
  addCart,
  productID,
  addWishList,
}) {
  return (
    // @ts-ignore
    <div className="shop-main">
      <Product
        product={product}
        addToCart={addToCart}
        addToWistList={addToWistList}
        id={undefined}
        title={undefined}
        thumbnail={undefined}
        addCart={addCart}
        addWishList={addWishList}
        productID={productID}
      />
      <AdditionalInformation />
      <BestSellerProducts itemID={itemID} />
      <Footer />
      <ToastContainer position="bottom-left" />
    </div>
  );
}

export default Shop;
