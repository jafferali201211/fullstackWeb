import { Injectable,inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
export interface User{
  id:number,
  name:string,
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };

}
@Injectable({
  providedIn: 'root',
})
export class TableApiService {
  http=inject(HttpClient);
  BASE_URL ='https://jsonplaceholder.typicode.com'

  // getUser:Observable<User[]>(){
  //     return this.http.get<User[]>(`$(this.BASE_URL)/users`)
  // }
  
 getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}/users`);
  }


}
