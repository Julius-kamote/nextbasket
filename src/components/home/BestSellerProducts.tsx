// import axios from "axios";
import { useEffect } from "react";
import cardFour from "../../images/home/card-cover-4.jpg";
import LoadMoreButton from "./LoadMoreButton";
import Logos from "../shop/Logos";

function BestSellerProducts() {
  const getData = async () => {
    // const response = await axios.get(
    //   "https://dummyjson.com/products/category/smartphones/furniture"
    // );
    // const products = await response.data;
    // console.log("TTTT", products);

    fetch("https://dummyjson.com/products/category/fragrances")
      .then((res) => res.json())
      .then(console.log);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="product-content">
      <div className="product-header">
        <p>Featured Products</p>
        <h3>Bestseller Products</h3>
        <span>Problem trying to resolve the conflict between</span>
      </div>
      <div className="product-list">
        <div>
          <img src={cardFour} alt="" />
          <div className="details">
            <h5>Graphic Design</h5>
            <p>English Department</p>
            <span>$16.48</span>
            <span className="green">$16.48</span>
          </div>
        </div>
        <div>
          <img src={cardFour} alt="" />
          <div className="details">
            <h5>Graphic Design</h5>
            <p>English Department</p>
            <span>$16.48</span>
            <span className="green">$16.48</span>
          </div>
        </div>
        <div>
          <img src={cardFour} alt="" />
          <div className="details">
            <h5>Graphic Design</h5>
            <p>English Department</p>
            <span>$16.48</span>
            <span className="green">$16.48</span>
          </div>
        </div>
        <div>
          <img src={cardFour} alt="" />
          <div className="details">
            <h5>Graphic Design</h5>
            <p>English Department</p>
            <span>$16.48</span>
            <span className="green">$16.48</span>
          </div>
        </div>
        <div>
          <img src={cardFour} alt="" />
          <div className="details">
            <h5>Graphic Design</h5>
            <p>English Department</p>
            <span>$16.48</span>
            <span className="green">$16.48</span>
          </div>
        </div>
        <div>
          <img src={cardFour} alt="" />
          <div className="details">
            <h5>Graphic Design</h5>
            <p>English Department</p>
            <span>$16.48</span>
            <span className="green">$16.48</span>
          </div>
        </div>
        <div>
          <img src={cardFour} alt="" />
          <div className="details">
            <h5>Graphic Design</h5>
            <p>English Department</p>
            <span>$16.48</span>
            <span className="green">$16.48</span>
          </div>
        </div>
      </div>
      <LoadMoreButton />
      <Logos />
    </div>
  );
}

export default BestSellerProducts;
