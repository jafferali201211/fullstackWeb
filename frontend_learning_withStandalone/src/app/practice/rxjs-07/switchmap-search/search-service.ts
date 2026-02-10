import { Injectable , inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  http = inject(HttpClient);

  searchUsers(term:string):Observable<any[]>{
      return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users?name_like=${term}`)
  }
  
}
