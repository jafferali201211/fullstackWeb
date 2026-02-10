import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class BehaviorSubjectService {
  private _userName =new BehaviorSubject<string>('Guest');

  setUserName(name:string){
    this._userName.next(name)
  }
  getSnapShot(){
    return this._userName.value; // current value immediately
  }
}
