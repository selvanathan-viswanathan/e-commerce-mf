import { ProductType } from "@/Types/ProductType";
import { FC } from "react";
import "./Product.css";

interface ProductProps {
  product: ProductType;
}

const Product: FC<ProductProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product?.images?.[0]}
        alt={product?.title}
        className="product-image"
        loading="lazy"
      />
      <div className="product-info">
        <p className="price">${product?.price}</p>
        <p className="title">{product?.title}</p>
      </div>
      <button className="buy-button">Add to Cart</button>
    </div>
  );
};

export default Product;
