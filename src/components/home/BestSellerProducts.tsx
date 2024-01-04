/*eslint-disable */

import axios from "axios";
import { useEffect, useState } from "react";
import Logos from "../shop/Logos";
import { useLocation } from "react-router-dom";

type dataType = {
  id: number;
  images: string;
};
// @ts-ignore
function BestSellerProducts({ itemID }) {
  const location = useLocation();

  const path = location.pathname === "/";
  const [product, setProduct] = useState<dataType[] | any>([]);
  const [limit, setLimit] = useState(path ? 10 : 8);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLimit(limit + 10);
  };

  const url = `https://dummyjson.com/products?limit=` + limit;

  const getData = async () => {
    setLoading(false);
    const response = await axios.get(url);
    setLoading(true);
    const data = await response.data.products;

    setProduct(data);
  };

  useEffect(() => {
    getData();
  }, [limit]);

  return (
    <div className="product-content">
      <div className="product-header">
        <p>Featured Products</p>
        <h3>Bestseller Products</h3>
        <span>Problem trying to resolve the conflict between</span>
      </div>

      <div className="product-list">
        {product.map((products: any) => (
          <div key={products.id} onClick={() => itemID(products.id)}>
            <img src={products.thumbnail} alt={product.title} />
            <div className="details">
              <h5>{products.brand}</h5>
              <p>{products.title}</p>
              <span>${products.price}</span>
              <span className="green">${products.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="load-more-btn">
        {limit <= 95 ? (
          <button onClick={loadMore}>
            {loading ? "Load More Products" : "Loading..."}
          </button>
        ) : (
          ""
        )}
      </div>
      <Logos />
    </div>
  );
}

export default BestSellerProducts;
