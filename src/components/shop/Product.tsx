import { FaRegStar, FaStar } from "react-icons/fa";
import { VscChevronRight } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

function Product({ product, addToCart, addToWistList, id, title, thumbnail }) {
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
        <div className="container-img">
          <div className="big-img">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="l-img"
            />
            <BsChevronRight className="right" />
            <BsChevronLeft className="left" />
          </div>
          <div className="two-img">
            {product.images &&
              product.images
                .slice(0, 2)
                .map((products) => (
                  <img key={products.id} src={products} alt={product.title} />
                ))}
          </div>
        </div>
        <div className="price-details">
          <h3>{product.title}</h3>
          <div>
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaRegStar className="star" />
            <p>10 Reviews</p>
          </div>
          <h2>$ {product.price}</h2>
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
            <button className="option">Select Options</button>
            <button className="btn" type="button">
              <FaRegHeart
                onClick={() => {
                  addToWistList(product.id);
                }}
              />
            </button>
            <button className="btn" type="button">
              <BsCart
                type="button"
                disabled
                onClick={() => {
                  addToCart(product.id);
                }}
              />
            </button>
            <button className="btn">
              <FaEye />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
