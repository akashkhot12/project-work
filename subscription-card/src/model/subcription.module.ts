import { offer } from "./offer.model";

export interface subscription{
  id ? : number ;
  type ? : string ;
  title ? :  string ;
  desc? :string;
  price ? : number ;
  offers ? : offer[] ;
}
