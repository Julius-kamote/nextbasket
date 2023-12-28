import cardOne from "../images/card-cover-1.jpg";
import cardTwo from "../images/card-cover-2.jpg";
import cardThree from "../images/card-cover-3.jpg";
import cardFour from "../images/card-cover-4.jpg";

function Section1() {
  return (
    <div className="section1">
      <div className="row-1 content">
        <img src={cardOne} alt="" />
        <div className="details">
          <span>5 Items</span>
          <h1>Furniture</h1>
          <a href="">Read more</a>
        </div>
      </div>
      <div className="row-2">
        <div className="content">
          <img src={cardThree} alt="" />
          <div className="details">
            <span>5 Items</span>
            <h1>Furniture</h1>
            <a href="">Read more</a>
          </div>
        </div>
        <div className="two-img">
          <div className="content">
            <img src={cardTwo} alt="" />
            <div className="details">
              <span>5 Items</span>
              <h1>Furniture</h1>
              <a href="">Read more</a>
            </div>
          </div>
          <div className="content">
            <img src={cardFour} alt="" />
            <div className="details">
              <span>5 Items</span>
              <h1>Furniture</h1>
              <a href="">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
