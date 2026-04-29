import { Component, output } from '@angular/core';
import { UserTest } from './user-test/user-test';
import {BehaviorSubject, takeUntil} from 'rxjs'

@Component({
  selector: 'app-behaviorsubject-subject-demo',
  imports: [UserTest],
  templateUrl: './behaviorsubject-subject-demo.html',
  styleUrl: './behaviorsubject-subject-demo.css',
})
export class BehaviorsubjectSubjectDemo {
   bSubject = new BehaviorSubject<string>('heloo');
  result:any=[];
   constructor(){
    this.result =this.bSubject.pipe(takeUntil("hello1"));
    console.log(this.result);
   }

}
