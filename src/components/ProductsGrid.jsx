import ProductContainer from "./ProductContainer";

import "./ProductsGrid.css";
import { products } from "/starting-code/data/products";

function ProductsGrid() {
  fetch("http://localhost:3000/api/products")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
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
