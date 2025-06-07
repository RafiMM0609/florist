export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  variants?: {
    color: string;
    price: string;
  }[];
}
