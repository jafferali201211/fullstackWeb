import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// ✅ How it works (Concept)
// API called once → data saved in BehaviorSubject
// ↓
// Component1 subscribes → gets data
// Component2 subscribes → gets same data
// Component3 subscribes → gets same data
export class PostStateService {
  http= inject(HttpClient);
  postsSubject$=new BehaviorSubject<any[]>([]);
  posts$= this.postsSubject$.asObservable();
  loadPostsOnce(){
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe(data=>{
      this.postsSubject$.next(data);
    })
  }
}
