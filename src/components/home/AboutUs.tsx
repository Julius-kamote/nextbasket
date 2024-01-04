import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import one from "../../images/home/001.png";
import two from "../../images/home/002.png";
import three from "../../images/home/003.png";
import four from "../../images/home/004.png";
import five from "../../images/home/005.png";
import six from "../../images/home/006.png";
import seven from "../../images/home/007.png";
import eight from "../../images/home/008.png";
import nine from "../../images/home/009.png";
import curve from "../../images/home/Curve.png";

function AboutUs() {
  return (
    <div className="about-content">
      <div className="about-details">
        <h2>What they say about us</h2>
        <img src={curve} alt="demoImages" />
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
        <img src={one} alt="demoImages" />
        <img src={two} alt="demoImages" />
        <img src={three} alt="demoImages" />
        <img src={four} alt="demoImages" />
        <img src={five} alt="demoImages" />
        <img src={six} alt="demoImages" />
        <img src={seven} alt="demoImages" />
        <img src={eight} alt="demoImages" />
        <img src={nine} alt="demoImages" />
      </div>
    </div>
  );
}

export default AboutUs;
