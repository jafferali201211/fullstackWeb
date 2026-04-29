import { Injectable } from '@angular/core';
import {BehaviorSubject,Observable,Subject} from 'rxjs'
@Injectable({
  providedIn: 'root',
})
export class User {
  // ✅ Subject (NO initial value, NO remembering)
  private userSubject = new Subject<string>()
  //BehaviorSubject (Has inital value, remembers last value)
  private userBehaviorSubject = new BehaviorSubject<string>('Inital user');

 
setUser(name:string){
  this.userSubject.next(name);
  this.userBehaviorSubject.next(name);
}

  // ✅ Expose as Observable (best practice)
getUserFromSubject(): Observable<string> {
    return this.userSubject.asObservable();
  }

getUserFromBehaviourSuject():Observable<string>{
  return this.userBehaviorSubject.asObservable();
}


}
