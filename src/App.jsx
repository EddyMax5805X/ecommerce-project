import { Routes, Route } from "react-router";

import "./App.css";
import HomePage from "./pages/homePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrdersPage from "./pages/ordersPage";
import TrackingPage from "./pages/TrackingPage";
import Error404 from "./pages/Error404";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />

        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/tracking" element={<TrackingPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
