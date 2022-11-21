import { Address } from "./address.model";

export class User {
  address: Address; 
  company: {bs: string, catchPhrase: string, name: string};
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  constructor(
    address: Address,
    company: {bs: string, catchPhrase: string, name: string},
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string,
  ) {
    this.address = address; 
    this.company = company; 
    this.email = email; 
    this.id = id;
    this.name = name; 
    this.phone = phone;
    this.username = username; 
    this.website = website; 
  }
}