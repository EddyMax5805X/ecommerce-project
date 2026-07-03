import { Link } from "react-router";

function OrderProduct({
  productImage,
  productName,
  productArriveDate,
  productQuantity,
}) {
  return (
    <>
      <div className="product-image-container">
        <img src={productImage} />
      </div>

      <div className="product-details">
        <div className="product-name">{productName}</div>
        <div className="product-delivery-date">
          Arriving on: {productArriveDate}
        </div>
        <div className="product-quantity">Quantity: {productQuantity}</div>
        <button className="buy-again-button button-primary">
          <img
            className="buy-again-icon"
            src="/src/assets/icons/buy-again.png"
          />
          <span className="buy-again-message">Add to Cart</span>
        </button>
      </div>

      <div className="product-actions">
        <Link to="/tracking">
          <button className="track-package-button button-secondary">
            Track package
          </button>
        </Link>
      </div>
    </>
  );
}

export default OrderProduct;
