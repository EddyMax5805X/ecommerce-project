import logo from "/src/assets/logo.png";
import mobileLogo from "/src/assets/mobile-logo.png";
import checkoutLockIcon from "/src/assets/icons/checkout-lock-icon.png";

import "./CheckoutHeader.css";

function CheckoutHeader() {
  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <a href="/">
            <img className="logo" src={logo} />
            <img className="mobile-logo" src={mobileLogo} />
          </a>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (
          <a className="return-to-home-link" href="/">
            3 items
          </a>
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
