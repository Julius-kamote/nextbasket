import { FaRegStar, FaStar } from "react-icons/fa";
import { VscChevronRight } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import one from "../../images/shop/1.jpg";
import two from "../../images/shop/2.png";
import three from "../../images/shop/3.jpg";

function Product() {
  return (
    <div className="product-container">
      <div className="breadcrumbs">
        <Link to="/" className="home">
          Home
        </Link>
        <VscChevronRight className="chevron-right" />
        <Link to="" className="shop">
          Shop
        </Link>
      </div>
      <div className="content">
        <div className="img">
          <img src={one} alt="" className="big-img" />
          <div>
            <img src={two} alt="" />
            <img src={three} alt="" />
          </div>
        </div>
        <div className="price-details">
          <h3>Floating Phone</h3>
          <div>
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaRegStar className="star" />
            <p>10 Reviews</p>
          </div>
          <h2>$1,139.33</h2>
          <p className="availability">
            Availability : <span>In Stock</span>
          </p>
          <p className="text">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>

          <div className="colors">
            <div className="blue"></div>
            <div className="green"></div>
            <div className="orange"></div>
            <div className="dark-blue"></div>
          </div>

          <div className="cta">
            <button>Select Options</button>
            <div>
              <FaRegHeart />
            </div>
            <div>
              <BsCart />
            </div>
            <div>
              <FaEye />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
