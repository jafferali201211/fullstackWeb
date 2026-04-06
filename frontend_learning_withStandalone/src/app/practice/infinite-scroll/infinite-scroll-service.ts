import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class InfiniteScrollService {
 
  http=inject(HttpClient);
  getPosts(page:number,limit:number){
    return this.http.get<any[]>(
 `https://jsonplaceholder.typicode.com/posts`,
      {
        params: {
          _page: page,
          _limit: limit
        }
      })
  }
}
