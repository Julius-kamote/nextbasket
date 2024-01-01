import AboutUs from "../components/home/AboutUs";
import BestSellerProducts from "../components/home/BestSellerProducts";
import BestServices from "../components/home/BestServices";
import DesigningExperience from "../components/home/DesigningExperience";
import Footer from "../components/home/Footer";
import PracticeAdvice from "../components/home/PracticeAdvice";
import Section1 from "../components/home/Section1";

function Home() {
  return (
    <>
      <div className="home-main">
        <Section1 />
        <BestSellerProducts />
        <BestServices />
        <PracticeAdvice />
        <AboutUs />
        <DesigningExperience />
        <Footer />
      </div>
    </>
  );
}

export default Home;
