export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export enum EPaymentMethod {
  COD = "COD",
  CARD = "CARD",
  UPI = "UPI",
  NETBANKING = "NETBANKING",
}
