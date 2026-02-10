import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Product{
  id:number;
  title:string;
  price:number;
  brand?:string;
  category?:string
}
@Injectable({
  providedIn: 'root',
})
export class RxjsRealApi {
  http=inject(HttpClient)
  constructor(){  }
  
  // ✅ REAL SEARCH API (DummyJSON)
  // Example: https://dummyjson.com/products/search?q=phone
  
searchProducts(query: string): Observable<Product[]> {
    return this.http
      .get<{ products: Product[] }>(`https://dummyjson.com/products/search`, {
        params: { q: query },
      })
      .pipe(map(res => res.products ?? []));
  }
  
// ✅ REAL PAGED LIST (DummyJSON)
  // Example: https://dummyjson.com/products?limit=10&skip=0
  getProducts(limit: number, skip: number): Observable<Product[]> {
    return this.http
      .get<{ products: Product[] }>('https://dummyjson.com/products', {
        params: { limit, skip },
      })
      .pipe(map(res => res.products ?? []));
  }

  // ✅ REAL POST (JSONPlaceholder) — not persisted but returns a response (good for practice)
  createPost(payload: { title: string; body: string; userId: number }): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', payload);
  }

  // ✅ REAL MULTI CALL for forkJoin demo
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }

  
}
