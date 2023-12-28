import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import cardFour from "../images/card-cover-4.jpg";

function AboutUs() {
  return (
    <div className="about-content">
      <div className="about-details">
        <h2>What they say about us</h2>
        <img src={cardFour} alt="" />
        <div>
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaRegStar className="star" />
        </div>
        <p className="text">
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </p>

        <p className="name">Regina Miles</p>
        <span>Designer</span>
      </div>
      <div className="about-gallery">
        <img src={cardFour} alt="" />
        <img src={cardFour} alt="" />
        <img src={cardFour} alt="" />
        <img src={cardFour} alt="" />
        <img src={cardFour} alt="" />
        <img src={cardFour} alt="" />
        <img src={cardFour} alt="" />
        <img src={cardFour} alt="" />
        <img src={cardFour} alt="" />
      </div>
    </div>
  );
}

export default AboutUs;
