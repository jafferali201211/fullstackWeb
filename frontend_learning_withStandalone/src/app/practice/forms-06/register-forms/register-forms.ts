import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {ReactiveFormsModule,FormBuilder,FormGroup,FormControl,Validators, AbstractControl,FormControlName} from '@angular/forms';
import { noSpaceValidators } from './no-space-validators';
@Component({
  selector: 'app-register-forms',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl:'./register-forms.html',
  styleUrl: './register-forms.css',
})
export class RegisterForms implements OnInit{
  fb = inject(FormBuilder)
  userForm = this.fb.group({
    name : ['',[Validators.required,noSpaceValidators]],
    email:['',[Validators.required,Validators.email]],
    // skills:[]
  })
 
  onSubmit(){
    if(this.userForm.invalid){
      this.userForm.markAllAsTouched()
      
    }
    console.log('Form Submitted:', this.userForm.value);
  }
  
   // ✅ Convenience getters (optional)
   get name(){
    return this.userForm.get('name');
   }
   get email(){
    return this.userForm.get('email');
   }
  
    // Main reason: To avoid repeating long code in HTML
  get f() {
    return this.userForm.controls
  }
  ngOnInit(){
   
// this.userForm = this.fb.group({
//   name: ['']
// });

  }
}
