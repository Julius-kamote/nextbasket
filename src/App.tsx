import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type dataType = {
  id: number;
  images: string;
  title: string;
};

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathLocation = location.pathname === "/";

  const mobileScreen = useMediaQuery({ query: "(max-width: 1160px)" });

  const [showCart, setShowCart] = useState(false);
  const [showWishList, setShowWishList] = useState(false);

  const handleShowCart = () => setShowCart(!showCart);
  const handleShowWishList = () => setShowWishList(!showWishList);

  const [product, setProduct] = useState<dataType[] | any>([]);
  const [productID, setproductID] = useState(1);

  const [addCart, setAddCart] = useState(
    localStorage.getItem("CartList")
      ? JSON.parse(localStorage.getItem("CartList"))
      : []
  );

  const wishLength = addCart.length;

  const [addWishList, setAddWishList] = useState(
    localStorage.getItem("WishList")
      ? JSON.parse(localStorage.getItem("WishList"))
      : []
  );

  const cartLength = addWishList.length;

  const url = `https://dummyjson.com/products/` + productID;

  const itemID = (id) => {
    setproductID(id);
    navigate("/shop");
  };

  const getData = async () => {
    const response = await axios.get(url);
    const { id, title, thumbnail, price, images } = await response.data;

    setProduct({
      id,
      title,
      thumbnail,
      quantity: 1,
      price,
      images,
      status: false,
    });
  };

  const addToCart = (id) => {
    setAddCart([...addCart, product]);
    toast("Item Successfully Added!");
    addCart.filter((item) => {
      item.id !== id
        ? setAddCart([...addCart, product])
        : setAddCart([...addCart]);
    });
  };

  const increase = (id) => {
    if (addCart.some((item) => item.id === id)) {
      setAddCart((cart) =>
        addCart.map((item) =>
          item.id === id
            ? {
                ...item,

                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setAddCart((cart) => [...cart, id]);
    }
  };

  const decrease = (id) => {
    if (addCart.some((item) => item.id === id)) {
      setAddCart((cart) =>
        addCart.map((item) =>
          item.id === id
            ? {
                ...item,

                quantity:
                  item.quantity == 0 ? item.quantity : item.quantity - 1,
              }
            : item
        )
      );
    } else {
      setAddCart((cart) => [...cart, id]);
    }
  };

  localStorage.setItem("CartList", JSON.stringify(addCart));

  const addToWistList = (id) => {
    setAddWishList([...addWishList, product]);
    toast("Wish Successfully Added!");
    addWishList.filter((item) => {
      item.id !== id
        ? setAddWishList([...addWishList, product])
        : setAddWishList([...addWishList]);
    });
  };

  localStorage.setItem("WishList", JSON.stringify(addWishList));

  const handleRemove = (id) => {
    toast("Item Successfully Removed!");
    setAddCart(addCart.filter((item) => item.id !== id));
    setAddWishList(addWishList.filter((item) => item.id !== id));
  };

  useEffect(() => {
    getData();
  }, [addCart, addWishList, productID]);

  return (
    <>
      {mobileScreen ? (
        <>
          {pathLocation ? (
            <HomeMobileNav
              addToCart={addToCart}
              addToWistList={addToWistList}
              handleShowCart={handleShowCart}
              handleShowWishList={handleShowWishList}
              showCart={showCart}
              showWishList={showWishList}
              addCart={addCart}
              addWishList={addWishList}
              handleRemove={handleRemove}
              increase={increase}
              decrease={decrease}
            />
          ) : (
            <ShopMobileNav
              addToCart={addToCart}
              addToWistList={addToWistList}
              handleShowCart={handleShowCart}
              handleShowWishList={handleShowWishList}
              showCart={showCart}
              showWishList={showWishList}
              addCart={addCart}
              addWishList={addWishList}
              handleRemove={handleRemove}
              increase={increase}
              decrease={decrease}
              wishLength={wishLength}
              cartLength={cartLength}
            />
          )}
        </>
      ) : (
        <>
          <Header />
          <Nav
            addToCart={addToCart}
            addToWistList={addToWistList}
            handleShowCart={handleShowCart}
            handleShowWishList={handleShowWishList}
            showCart={showCart}
            showWishList={showWishList}
            addCart={addCart}
            addWishList={addWishList}
            handleRemove={handleRemove}
            increase={increase}
            decrease={decrease}
            wishLength={wishLength}
            cartLength={cartLength}
          />
        </>
      )}

      <Routes>
        <Route path="/" element={<Home itemID={itemID} />}></Route>
        <Route
          path="shop"
          element={
            <Shop
              product={product}
              addToCart={addToCart}
              addToWistList={addToWistList}
            />
          }
        ></Route>
        <Route path="coming-soon" element={<ComingSoon />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
