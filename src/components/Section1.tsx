import cardOne from "../images/card-cover-1.jpg";
import cardTwo from "../images/card-cover-2.jpg";
import cardThree from "../images/card-cover-3.jpg";
import cardFour from "../images/card-cover-4.jpg";

function Section1() {
  return (
    <div className="section1">
      <div className="row-1">
        <img src={cardOne} alt="" />
      </div>
      <div className="row-2">
        <div>
          <img src={cardThree} alt="" />
        </div>
        <div className="two-img">
          <img src={cardTwo} alt="" />
          <img src={cardFour} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section1;
