import AboutUs from "../components/AboutUs";
import BestSellerProducts from "../components/BestSellerProducts";
import BestServices from "../components/BestServices";
import DesigningExperience from "../components/DesigningExperience";
import Footer from "../components/Footer";
import PracticeAdvice from "../components/PracticeAdvice";
import Section1 from "../components/Section1";

function Home() {
  return (
    <div>
      <Section1 />
      <BestSellerProducts />
      <BestServices />
      <PracticeAdvice />
      <AboutUs />
      <DesigningExperience />
      <Footer />
    </div>
  );
}

export default Home;
