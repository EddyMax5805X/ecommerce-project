import logo from "/src/assets/logo.png";
import mobileLogo from "/src/assets/mobile-logo.png";
import checkoutLockIcon from "/src/assets/icons/checkout-lock-icon.png";

import "./CheckoutHeader.css";
import { Link } from "react-router";

function CheckoutHeader() {
  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/">
            <img className="logo" src="letrasCS_dedicated.svg" />
            <img className="mobile-logo" src={mobileLogo} />
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (
          <Link className="return-to-home-link" to="/">
            3 items
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
