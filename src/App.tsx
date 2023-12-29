import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/nav/Header";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import "./styles/home.scss";
import "./styles/shop.scss";
import PageNotFound from "./pages/PageNotFound";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="coming-soon" element={<ComingSoon />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
