import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/nav/Header";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import "./styles/home.scss";
import "./styles/shop.scss";
import "./styles/home-mobile.scss";
import "./styles/shop-mobile.scss";
import ShopMobileNav from "./components/nav/ShopMobileNav";
import HomeMobileNav from "./components/nav/HomeMobileNav";
import PageNotFound from "./pages/PageNotFound";
import ComingSoon from "./pages/ComingSoon";
import { useMediaQuery } from "react-responsive";

function App() {
  const location = useLocation();
  const mobileScreen = useMediaQuery({ query: "(max-width: 1160px)" });
  console.log(location);

  return (
    <>
      {mobileScreen ? (
        <>{location.pathname === "/" ? <HomeMobileNav /> : <ShopMobileNav />}</>
      ) : (
        <>
          <Header />
          <Nav />
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="coming-soon" element={<ComingSoon />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
