import BestSellerProducts from "./components/BestSellerProducts";
import BestServices from "./components/BestServices";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import "./styles/app.scss";

function App() {
  return (
    <div>
      <Header />
      <Section1 />
      <BestSellerProducts />
      <BestServices />
    </div>
  );
}

export default App;
