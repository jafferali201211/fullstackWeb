import { Component, OnInit } from '@angular/core';
import { formConfig } from './form-config'; 
import {CommonModule, JsonPipe} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { noSpaceValidator } from './validatorMethods';
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
      let validators = field.validators || [];
      //  ✅ dynamically remove validators during creation
       if(field.controlName == 'age'){
        validators =[];
      }
     
      group[field.controlName]= new FormControl("",field.validators || []);
     
    });
    this.form = new FormGroup(group);

    
// ✅ Optional: runtime removal (example)
    // const ageControl = this.form.get('age');
    // ageControl?.clearValidators();
    // ageControl?.updateValueAndValidity();

    const nameControl = this.form.get('name');
    nameControl?.setValidators(noSpaceValidator);
    nameControl?.updateValueAndValidity();
    // Why updateValueAndValidity() is required?
    // Because Angular does not automatically re-run validation after validators change.

    // ❓ setValidators vs clearValidators?
    // setValidators() =>Replace validators
    // clearValidators() => Remove all validators
  }

  submit(){
    console.log('Form Value',this.form.value);
  }
}
