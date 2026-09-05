import Header from "../components/Header";
import "./OrdersPage.css";
import OrderContainer from "../components/OrderContainer";
import { useEffect, useState } from "react";
import axios from "axios";

function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/orders").then(({ data }) => {
      setOrders(data);
      console.log(data);
    });
  }, []);
  return (
    <>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          <OrderContainer
            orderDate={"August 12"}
            orderTotal={35.06}
            orderID={"27cba69d-4c3d-4098-b42d-ac7fa62b7664"}
            orderProducts={[
              {
                productImage:
                  "/src/assets/products/athletic-cotton-socks-6-pairs.jpg",
                productName: "Black and Gray Athletic Cotton Socks - 6 Pairs",
                productArrivingDate: "August 15",
                productQuantity: 1,
              },
              {
                productImage:
                  "/src/assets/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
                productName: "Adults Plain Cotton T-Shirt - 2 Pack",
                productArrivingDate: "August 19",
                productQuantity: 2,
              },
            ]}
          />

          <OrderContainer
            orderDate={"June 10"}
            orderTotal={41.9}
            orderID={"b6b6c212-d30e-4d4a-805d-90b52ce6b37d"}
            orderProducts={[
              {
                productImage:
                  "/src/assets/products/intermediate-composite-basketball.jpg",
                productName: "Intermediate Size Basketball",
                productArrivingDate: "June 27",
                productQuantity: 2,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default OrdersPage;
