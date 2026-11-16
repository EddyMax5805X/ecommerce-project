import logoWhite from "/src/assets/letrasCS_dedicated_white.svg";
import searchIcon from "../assets/icons/search-icon.png";
import cartIcon from "../assets/icons/cart-icon.png";
import { NavLink } from "react-router";

import "./Header.css";
import { getCartItems } from "../utils/getCartItems";

export default function Header({ cart }) {
  let cartItems = getCartItems(cart) || 0;

  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo" src={logoWhite} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src={searchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={cartIcon} />
          <div className="cart-quantity">{cartItems}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}
