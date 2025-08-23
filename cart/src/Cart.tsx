import { FC } from "react";
import "./Cart.css";
import { CartItemType } from "./Types/ProductType";
import { mockCart } from "./mockData";

interface CartProps {
  cart?: CartItemType;
}

const Cart: FC<CartProps> = ({ cart }) => {
  const total = (cart || mockCart).products.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      <ul className="cart-items">
        {(cart || mockCart).products.map((item) => (
          <li key={item.product.id} className="cart-item">
            <img
              src={item.product.images[0]}
              alt={item.product.title}
              className="cart-item-image"
            />
            <div className="cart-item-info">
              <p className="cart-item-title">{item.product.title}</p>
              <p className="cart-item-price">
                ${item.product.price} × {item.quantity}
              </p>
              <p className="cart-item-subtotal">
                Subtotal: ${(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-footer">
        <h3>Total: ${total.toFixed(2)}</h3>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
