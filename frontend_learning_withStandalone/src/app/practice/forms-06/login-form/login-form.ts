import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup ,ReactiveFormsModule,Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
form = new FormGroup({
  email: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',Validators.required)

});

submit(){
  if(this.form.invalid){
   return;
  }
   console.log(this.form.value);
}
}
