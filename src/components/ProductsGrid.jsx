import ProductContainer from "./ProductContainer";

import "./ProductsGrid.css";
import { products } from "/starting-code/data/products";
import axios from "axios";

function ProductsGrid() {
  axios.get("http://localhost:3000/api/products").then((response) => {
    console.log(response.data);
  });

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
