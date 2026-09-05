import axios from "axios";
import { useEffect, useState } from "react";

import ProductContainer from "./ProductContainer";
import "./ProductsGrid.css";

function ProductsGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then(({ data }) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="home-page">
      <div className="products-grid">
        {products.map((product) => {
          return (
            <ProductContainer
              key={product.id}
              productImage={product.image}
              productName={product.name}
              productRatingStars={product.rating.stars}
              productRatingCount={product.rating.count}
              productPrice={product.price / 2}
              productQuantity={10}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductsGrid;
