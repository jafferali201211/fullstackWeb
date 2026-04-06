import { Injectable ,inject} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string; };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
export interface Products{
  id: number,
    title: string,
    price: number,
    description: string,
    category:string,
    image:string,
    rating: {
      rate: number,
      count: number
    }
}
@Injectable({
  providedIn: 'root',
})

export class Jsonplace {

  http=inject(HttpClient);

  getUser():Observable<User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
  getFakeStoreProducts(){
    return this.http.get<Products[]>('https://fakestoreapi.com/products')
  }
  getEmployeModels(){
    return this.http.get('http://localhost:8080/employees');
  }
}
