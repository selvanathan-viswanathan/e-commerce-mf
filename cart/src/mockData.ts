import { CartItemType, CategoryType, ProductType } from "./Types/ProductType";

// Example Category
export const mockCategory: CategoryType = {
  id: 1,
  name: "Electronics",
  slug: "electronics",
  image: "https://via.placeholder.com/150",
  creationAt: new Date("2023-01-01"),
  updatedAt: new Date("2023-06-01"),
};

// Example Products
export const mockProducts: ProductType[] = [
  {
    id: 101,
    title: "Grety Track Pant",
    slug: "grey-track-pant",
    price: 199.99,
    description: "High quality Grey Track Pant.",
    category: mockCategory,
    images: ["https://i.imgur.com/mp3rUty.jpeg"],
    creationAt: new Date("2023-03-01"),
    updatedAt: new Date("2023-07-01"),
  },
  {
    id: 102,
    title: "Gray Hoodie",
    slug: "gray-hoodie",
    price: 799.99,
    description: "Gray Hoodie for all seasons.",
    category: mockCategory,
    images: ["https://i.imgur.com/cHddUCu.jpeg"],
    creationAt: new Date("2023-04-01"),
    updatedAt: new Date("2023-07-15"),
  },
];

// Example Cart
export const mockCart: CartItemType = {
  id: 1,
  userId: 123,
  date: new Date(),
  products: [
    {
      product: mockProducts[0],
      quantity: 2,
    },
    {
      product: mockProducts[1],
      quantity: 1,
    },
  ],
};
