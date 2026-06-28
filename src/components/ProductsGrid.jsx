import ProductContainer from "./ProductContainer";

import athleticCottonSocks from "/src/assets/products/athletic-cotton-socks-6-pairs.jpg";
import intermediateBasketball from "../assets/products/intermediate-composite-basketball.jpg";
import adultsCottonTshirt from "../assets/products/adults-plain-cotton-tshirt-2-pack-teal.jpg";

// Ratings import
import rating0 from "../assets/ratings/rating-0.png";
import rating5 from "../assets/ratings/rating-5.png";
import rating10 from "../assets/ratings/rating-10.png";
import rating15 from "../assets/ratings/rating-15.png";
import rating20 from "../assets/ratings/rating-20.png";
import rating25 from "../assets/ratings/rating-25.png";
import rating30 from "../assets/ratings/rating-30.png";
import rating35 from "../assets/ratings/rating-35.png";
import rating40 from "../assets/ratings/rating-40.png";
import rating45 from "../assets/ratings/rating-45.png";
import rating50 from "../assets/ratings/rating-50.png";

import "./ProductsGrid.css";

function ProductsGrid() {
  return (
    <div className="home-page">
      <div className="products-grid">
        <ProductContainer
          productImage={athleticCottonSocks}
          productName="Black and Gray Athletic Cotton Socks - 6 Pairs"
          productRatingStars={rating45}
          productRatingCount={87}
          productPrice={10.9}
          productQuantity={10}
        />

        <ProductContainer
          productImage={intermediateBasketball}
          productName="Intermediate Size Basketball"
          productRatingStars={rating40}
          productRatingCount={127}
          productPrice={20.95}
          productQuantity={10}
        />

        <ProductContainer
          productImage={adultsCottonTshirt}
          productName="Adults Plain Cotton T-Shirt - 2 Pack"
          productRatingStars={rating45}
          productRatingCount={56}
          productPrice={7.99}
          productQuantity={10}
        />
      </div>
    </div>
  );
}

export default ProductsGrid;
