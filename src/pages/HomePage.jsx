import Header from "../components/Header";
import ProductsGrid from "../components/ProductsGrid";

function HomePage({ cart }) {
  return (
    <>
      <title>E-commerce - Home</title>

      <Header cart={cart} />
      <ProductsGrid />
    </>
  );
}

export default HomePage;
