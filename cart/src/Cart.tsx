import React, { FC, useEffect, useRef } from "react";
import "./Cart.css";
import { CartItemType, ProductType } from "./Types/ProductType";
import { mockCart } from "./mockData";

interface CartProps {
  cart?: CartItemType;
}

const Cart: FC<CartProps> = () => {
  const userId = 1; // Example user ID
  const [cart, setCart] = React.useState<CartItemType>({} as CartItemType);
  type ProductMapType = { [key: number]: ProductType };
  const [productsMap, setProductsMap] = React.useState<ProductMapType>();
  const total = useRef<number>(0);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => {
        const prods: ProductMapType = {};
        data?.forEach((prod: ProductType) => {
          prods[prod.id] = prod;
        });
        setProductsMap(prods);
      });
  }, []);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/carts/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data?.products?.length === 0) {
          data = mockCart;
        }

        data?.products?.forEach(
          (item: { productId: number; product: ProductType }) => {
            item.product = productsMap?.[item.productId] as ProductType;
          },
        );
        const totalSum = data?.products?.reduce(
          (
            sum: number,
            item: { productId: number; product: ProductType; quantity: number },
          ) => sum + item?.product?.price * item?.quantity,
          0,
        );
        total.current = totalSum;
        setCart(data);
      });
    return () => {};
  }, [productsMap]);

  const EmptyCart = (cartId: number): void => {
    fetch(`https://fakestoreapi.com/carts/${cartId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <section className="cart-section">
      <div className="cart-container">
        <h2 className="cart-title">Your Cart</h2>
        <ul className="cart-items">
          {cart?.products?.map((item) => (
            <li key={item?.product?.id} className="cart-item">
              <img
                src={item?.product?.image}
                alt={item?.product?.title}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <p className="cart-item-title">{item?.product?.title}</p>
                <p className="cart-item-price">
                  ${item?.product?.price} × {item?.quantity}
                </p>
                <p className="cart-item-subtotal">
                  Subtotal: $
                  {(item?.product?.price * item?.quantity).toFixed(2)}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart-footer">
          <h3>Total: ${total?.current?.toFixed(2)}</h3>
          <button
            className="checkout-button"
            onClick={() => {
              EmptyCart(cart?.id);
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
