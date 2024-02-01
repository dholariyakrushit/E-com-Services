export interface IproductData {
  id: number;
  title?: string;
  description?: string;
  total:number 
  price?: number  ;
  discountPercentage?: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export interface IapiData {
  products?: IproductData[];
  total?: number;
  skip?: number;
  limit?: number;
}

export interface Iform {
  firstname?: string;
  lastname?: string;
  contact?: string;
  email?: string;
  password?: string;
  confirm_password?: string;
  isLogin?: boolean;
}

export type DispatchType = (args: IapiData) => IapiData;
