import OrderProduct from "./OrderProduct";

function OrderContainer({ orderDate, orderTotal, orderID, orderProducts }) {
  return (
    <div className="order-container">
      <div className="order-header">
        <div className="order-header-left-section">
          <div className="order-date">
            <div className="order-header-label">Order Placed:</div>
            <div>{orderDate}</div>
          </div>
          <div className="order-total">
            <div className="order-header-label">Total:</div>
            <div>${orderTotal}</div>
          </div>
        </div>

        <div className="order-header-right-section">
          <div className="order-header-label">Order ID:</div>
          <div>{orderID}</div>
        </div>
      </div>

      <div className="order-details-grid">
        {orderProducts.map((orderProduct) => {
          return (
            <OrderProduct
              productImage={orderProduct.productImage}
              productName={orderProduct.productName}
              productArriveDate={orderProduct.productArriveDate}
              productQuantity={orderProduct.productQuantity}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OrderContainer;
