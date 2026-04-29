import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-test',
  imports: [],
  templateUrl: './user-test.html',
  styleUrl: './user-test.css',
})
export class UserTest {
  constructor(private user:User){
    console.log('Early subscription')
    // EARLY subscription
    this.user.getUserFromSubject().subscribe(value=>{
      console.log('Subject (early):',value);
    });
    this.user.getUserFromBehaviourSuject().subscribe(value =>{
      console.log("behaviour subject (early)",value);
    })
  }

  setUser(){
    this.user.setUser('Ali');
  }

  lateSubscribe(){
    console.log('late subcription')

    this.user.getUserFromSubject().subscribe(value=>{
      console.log('subject (late)',value);
    })

    this.user.getUserFromBehaviourSuject().subscribe(value=>{
      console.log('behaviorSubject (late):',value);
    })
  }

}
