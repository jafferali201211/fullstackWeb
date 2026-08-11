import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import {form,required,email,FormField} from '@angular/forms/signals'
 
@Component({
  selector: 'app-signal-forms',
  imports: [FormField],
  templateUrl: './signal-forms.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './signal-forms.css',
})
export class SignalForms {
  count = signal(0);
  count1 = signal<object>({});
 count2 =signal<any[]>([]);

 
  loginModal = signal({
    email:'',
    password:''
  });
  loginForm = form(this.loginModal,(login)=>{
    required(login.email);
    required(login.password);
    email(login.email);
  });
  ngOnInit(){
    console.log('test',this.loginForm);
    this.count.set(10);
  }
  submit(){
    // if (this.loginForm().invalid()) {
    //   return;
    // }
    if(this.loginForm().invalid()) {
      console.log('invalid form',this.loginForm().errors());
  }
  }

}
