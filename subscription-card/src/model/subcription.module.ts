import { offers } from "./offer.model";

export class subscription{
  id?:number;
  type?:string;
  desc?:string;
  price?:number;
  offer?:offers[];
}
