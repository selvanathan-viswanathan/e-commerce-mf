import { FC } from "react";
import { FaCreditCard, FaShoppingCart } from "react-icons/fa";
import "./Header.css";

const Header: FC = () => {
  return (
    <header className="header">
      {/* Left: Logo + Name */}
      <div className="logo-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png" // random shop logo
          alt="App Logo"
          className="logo"
        />
        <span className="app-name">E-commerce</span>
      </div>

      {/* Right: Icons */}
      <div className="nav-icons">
        <button className="icon-btn" aria-label="Cart">
          <FaShoppingCart />
        </button>
        <button className="icon-btn" aria-label="Checkout">
          <FaCreditCard />
        </button>
      </div>
    </header>
  );
};

export default Header;
