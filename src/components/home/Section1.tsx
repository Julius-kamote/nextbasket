import cardOne from "../../images/home/card-cover-1.jpg";
import cardTwo from "../../images/home/card-cover-2.jpg";
import cardThree from "../../images/home/card-cover-3.jpg";
import cardFour from "../../images/home/card-cover-4.jpg";

function Section1() {
  return (
    <div className="section1">
      <div className="row-1 content">
        <div className="img-container">
          <img src={cardOne} alt="demoImages" />
        </div>
        <div className="details">
          <span>5 Items</span>
          <h1>Furniture</h1>
          <a href="">Read more</a>
        </div>
      </div>
      <div className="row-2">
        <div className="content">
          <div className="img-container">
            <img className="sm-img" src={cardThree} alt="demoImages" />
          </div>
          <div className="details">
            <span>5 Items</span>
            <h1>Furniture</h1>
            <a href="">Read more</a>
          </div>
        </div>
        <div className="two-img">
          <div className="content">
            <div className="img-container">
              <img src={cardTwo} alt="demoImages" />
            </div>
            <div className="details">
              <span>5 Items</span>
              <h1>Furniture</h1>
              <a href="">Read more</a>
            </div>
          </div>
          <div className="content">
            <div className="img-container">
              <img src={cardFour} alt="demoImages" />
            </div>
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
