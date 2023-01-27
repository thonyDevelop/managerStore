export interface IBaseProduct {
  description: string;
  price: number;
  store: number;
}

export interface IProduct extends IBaseProduct {
  id: number | null;
}

export interface IBaseLogin{
  username: string;
  password: string;
  remembered: boolean;
}