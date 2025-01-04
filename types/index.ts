export interface Product {
  id: string;
  title: string;
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

export type TAdminUserFormProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  permissions: string[];
};

export type TTopBarProps = {
  title: string;
  bgColor?: string;
  bgImage?: string;
  active: boolean;
};

export type TUserSignInFormProps = {
  email: string;
  password: string;
};

export type TUserSignUpFormProps = {
  first_name: string;
  last_name: string;
  number: string;
  email: string;
  password: string;
};
