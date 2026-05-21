import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateUser } from '../users/usersAction.actions';
import { selectUser } from '../users/usersSelector.selectors';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-user-comp',
  imports: [AsyncPipe],
  templateUrl: './user-comp.html',
  styleUrl: './user-comp.css',
})
export class UserComp {
user$:any;

constructor(private store:Store){
  this.user$= this.store.select(selectUser);
}
update(){
  this.store.dispatch(
    updateUser({id:2,name:'John Doe',age:30}));
}
}
