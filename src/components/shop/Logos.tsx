import logoOne from "../../images/shop/logo1.png";
import logoTwo from "../../images/shop/logo2.png";
import logoThree from "../../images/shop/logo3.png";
import logoFour from "../../images/shop/logo4.png";
import logoFive from "../../images/shop/logo5.png";
import logoSix from "../../images/shop/logo6.png";

function Logos() {
  return (
    <div className="logos">
      <img src={logoOne} alt="demoImages" />
      <img src={logoTwo} alt="demoImages" />
      <img src={logoThree} alt="demoImages" />
      <img src={logoFour} alt="demoImages" />
      <img src={logoFive} alt="demoImages" />
      <img src={logoSix} alt="demoImages" />
    </div>
  );
}

export default Logos;
