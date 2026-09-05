import { Routes, Route } from "react-router";

import "./App.css";
import HomePage from "./pages/homePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrdersPage from "./pages/ordersPage";
import TrackingPage from "./pages/TrackingPage";
import Error404 from "./pages/Error404";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState(0);

  useEffect(() => {
    axios.get("/api/cart-items").then(({ data }) => {
      setCart(data);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />

        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="/orders" element={<OrdersPage cart={cart} />} />
        <Route path="/tracking" element={<TrackingPage cart={cart} />} />
        <Route path="*" element={<Error404 cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
