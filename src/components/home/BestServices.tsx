import iconOne from "../../images/home/icon1.png";
import iconTwo from "../../images/home/icon2.png";
import iconThree from "../../images/home/icon3.png";

function BestServices() {
  return (
    <div className="services-content">
      <div className="services-header">
        <p>Featured Products</p>
        <h3>The Best Services</h3>
        <span>Problem trying to resolve the conflict between</span>
      </div>
      <div className="services-list">
        <div>
          <img src={iconOne} alt="iconone" />
          <h3>Easy Wins</h3>
          <p>Get your best looking smile now!</p>
        </div>
        <div>
          <img src={iconTwo} alt="icontwo" />
          <h3>Concrete</h3>
          <p>
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>
        <div>
          <img src={iconThree} alt="iconthree" />
          <h3>Hack Growth</h3>
          <p>Overcame any hurdle or any other problem</p>
        </div>
      </div>
    </div>
  );
}

export default BestServices;
