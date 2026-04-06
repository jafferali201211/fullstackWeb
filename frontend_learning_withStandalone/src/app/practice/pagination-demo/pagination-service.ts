import { inject, Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  http= inject(HttpClient);
   getData(getPage:number,getLimit:number){
    // return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts?_page=${getPage}&_limit=${getLimit}`);
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts`,
      {
        params: {
          _page: getPage,
          _limit: getLimit
        }
      })
   }
}
