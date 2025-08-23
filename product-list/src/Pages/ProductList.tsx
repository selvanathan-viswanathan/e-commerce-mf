import { ProductType } from "@/Types/ProductType";
import React, { useEffect } from "react";
import Product from "../Components/Product";
import "./ProductList.css";

const ProductList: React.FC = () => {
  const [products, setProducts] = React.useState<Array<ProductType>>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container">
      <section className="header-section">
        <div>
          <h1>Product Component</h1>
          <h5>
            This is the Product component from the Product List micro-frontend.
            It showcases a list of products available for purchase.
          </h5>
        </div>
        <div>
          <img
            src="https://fakeapi.platzi.com/_astro/banner.ivKB20eB_Z1cj9ue.webp"
            alt="Product List Banner"
            className="header-image"
          />
        </div>
      </section>

      <h1>Products</h1>
      <section className="products-section">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default ProductList;
