import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="success-container">
      <div className="success-card">
        <img
          src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
          alt="Success"
          className="success-image"
        />
        <h1 className="success-title">Order Successful!</h1>
        <p className="success-message">
          Thank you for your purchase. Your order has been placed successfully
          🎉
        </p>
        <Link className="success-button" to="/">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
