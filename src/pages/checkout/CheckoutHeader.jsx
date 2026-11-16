import logo from "/src/assets/letrasCS_dedicated_coloured.svg";
import checkoutLockIcon from "/src/assets/icons/checkout-lock-icon.png";

import "./CheckoutHeader.css";
import { Link } from "react-router";
import { getCartItems } from "../../utils/getCartItems";

function CheckoutHeader({ cart }) {
  let cartItems = getCartItems(cart);

  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/">
            <img className="logo" src={logo} />
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (
          <Link className="return-to-home-link" to="/">
            {cartItems} {cartItems == 1 ? "item" : "items"}
          </Link>
          )
        </div>

        <div className="checkout-header-right-section">
          <img src={checkoutLockIcon} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutHeader;
