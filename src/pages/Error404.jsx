import Header from "../components/Header";
import "../index.css";

function Error404({ cart }) {
  return (
    <>
      <Header cart={cart} />
      <div className="page-not-found">
        <h2>Page not found!</h2>
      </div>
    </>
  );
}

export default Error404;
