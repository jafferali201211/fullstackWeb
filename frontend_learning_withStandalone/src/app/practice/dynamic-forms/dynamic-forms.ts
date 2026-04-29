import { Component, OnInit } from '@angular/core';
import { formConfig } from './form-config'; 
import {CommonModule, JsonPipe} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-dynamic-forms',
  imports: [CommonModule,ReactiveFormsModule,JsonPipe],
  templateUrl: './dynamic-forms.html',
  styleUrl: './dynamic-forms.css',
})
export class DynamicForms implements OnInit{
  form!:FormGroup;
  config=formConfig;
  ngOnInit(){
    const group: any={};
    //creates form controls dynamically
    this.config.forEach((field)=>{
      group[field.controlName]= new FormControl("",field.validators || []);
    });
    this.form = new FormGroup(group);
  }

  submit(){
    console.log('Form Value',this.form.value);
  }
}
