import BestSellerProducts from "../components/home/BestSellerProducts";
import Footer from "../components/home/Footer";
import AdditionalInformation from "../components/shop/AdditionalInformation";
import Product from "../components/shop/Product";

function Shop() {
  return (
    <div className="shop-main">
      <Product />
      <AdditionalInformation />
      <BestSellerProducts />
      <Footer />
    </div>
  );
}

export default Shop;
