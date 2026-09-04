import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductsGrid from "../components/ProductsGrid";
import axios from "axios";

function HomePage() {
  const [quantity_cartItems, setQuantity_cartItems] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3000/api/cart-items").then(({ data }) => {
      let cartItems = 0;
      data.forEach((cartItem) => {
        cartItems += cartItem.quantity;
      });
      setQuantity_cartItems(cartItems);
    });
  }, []);

  return (
    <>
      <title>E-commerce - Home</title>

      <Header cartItems={quantity_cartItems} />
      <ProductsGrid />
    </>
  );
}

export default HomePage;
