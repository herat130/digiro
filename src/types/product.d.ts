export interface IProduct {
  id: number;
  price: number;
}

export interface IOption {
  size:number;
}

export interface IReturnObj {
  highest: IProduct[] | null;
  lowest: IProduct[] | null;
}