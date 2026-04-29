import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareReplayPostStateService {
  
  /**
   * @description
   * posts$ is a shared observable.
   * - API is called only once
   * - Latest value is cached
   * - All components reuse same data
   */

  posts$!: Observable<any[]>;
  // Why logic is in constructor?
  //Because this API should be prepared once, not repeatedly.
  constructor(private http : HttpClient){
    this.posts$ =this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      
        // ✅ share one API call
        // ✅ replay last emitted value to new subscribers

      shareReplay(1)
    );
  }

}
