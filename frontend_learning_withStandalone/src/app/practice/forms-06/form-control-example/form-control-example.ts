import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule ,FormControl, Validators, FormGroup} from '@angular/forms';
import { LoginForm } from '../login-form/login-form';

@Component({
  selector: 'app-form-control-example',
  imports: [ReactiveFormsModule,CommonModule,LoginForm],
  templateUrl: './form-control-example.html',
  styleUrl: './form-control-example.css',
})
export class FormControlExample {
  name = new FormControl('jaffer',Validators.required);

  form:FormGroup;

  constructor(){
    this.form=new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl(''),
      
    })
  }
  submit(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
    }
    console.log(this.form.value);
  }

}
