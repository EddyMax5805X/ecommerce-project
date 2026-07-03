import ProductContainer from "./ProductContainer";

import "./ProductsGrid.css";
import { products } from "/starting-code/data/products";

function ProductsGrid() {
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
