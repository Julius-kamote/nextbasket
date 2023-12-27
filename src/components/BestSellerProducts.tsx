import axios from "axios";
import { useEffect } from "react";
import cardFour from "../images/card-cover-4.jpg";

function BestSellerProducts() {
  const getData = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    const products = await response.data.products;
    console.log("TTTT", products);
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
          <h5>Graphic Design</h5>
          <p>English Department</p>
          <span>$16.48</span>
          <span className="green">$16.48</span>
        </div>
        <div>
          <img src={cardFour} alt="" />
          <h5>Graphic Design</h5>
          <p>English Department</p>
          <span>$16.48</span>
          <span className="green">$16.48</span>
        </div>
        <div>
          <img src={cardFour} alt="" />
          <h5>Graphic Design</h5>
          <p>English Department</p>
          <span>$16.48</span>
          <span className="green">$16.48</span>
        </div>
        <div>
          <img src={cardFour} alt="" />
          <h5>Graphic Design</h5>
          <p>English Department</p>
          <span>$16.48</span>
          <span className="green">$16.48</span>
        </div>
        <div>
          <img src={cardFour} alt="" />
          <h5>Graphic Design</h5>
          <p>English Department</p>
          <span>$16.48</span>
          <span className="green">$16.48</span>
        </div>
        <div>
          <img src={cardFour} alt="" />
          <h5>Graphic Design</h5>
          <p>English Department</p>
          <span>$16.48</span>
          <span className="green">$16.48</span>
        </div>
        <div>
          <img src={cardFour} alt="" />
          <h5>Graphic Design</h5>
          <p>English Department</p>
          <span>$16.48</span>
          <span className="green">$16.48</span>
        </div>
      </div>
      <button>Load More Products</button>
    </div>
  );
}

export default BestSellerProducts;