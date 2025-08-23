export type CategoryType = {
  id: 1;
  name: string;
  slug: string;
  image: string;
  updatedAt: Date;
  creationAt: Date;
};

export type ProductType = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: CategoryType;
  images: Array<string>;
  creationAt: Date;
  updatedAt: Date;
};

export type CartItemType = {
  id: number;
  userId?: number;
  date: Date;
  products: Array<{
    product: ProductType;
    quantity: number;
  }>;
};
