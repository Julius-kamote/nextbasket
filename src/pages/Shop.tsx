import { ToastContainer } from "react-toastify";
import BestSellerProducts from "../components/home/BestSellerProducts";
import Footer from "../components/home/Footer";
import AdditionalInformation from "../components/shop/AdditionalInformation";
import Product from "../components/shop/Product";

function Shop({ product, addToCart, addToWistList, itemID, status }) {
  return (
    <>
      <div className="shop-main">
        <Product
          product={product}
          addToCart={addToCart}
          addToWistList={addToWistList}
        />
        <AdditionalInformation />
        <BestSellerProducts itemID={itemID} />
        <Footer />
        <ToastContainer position="bottom-left" />
      </div>
    </>
  );
}

export default Shop;
