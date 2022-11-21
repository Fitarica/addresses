export class Address {
  city: string;
  geo: { lat: string, lng: string };
  street: string;
  suite: string;
  zipcode: string;

  constructor(
    city: string,
    geo: { lat: string, lng: string },
    street: string,
    suite: string,
    zipcode: string,
  ){
    this.city = city;
    this.geo = geo; 
    this.street = street; 
    this.suite = suite; 
    this.zipcode = zipcode;
  } 
}