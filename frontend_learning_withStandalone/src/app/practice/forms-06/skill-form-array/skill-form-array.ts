import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule ,FormGroup,FormArray,FormControl} from '@angular/forms';

@Component({
  selector: 'app-skill-form-array',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './skill-form-array.html',
  styleUrl: './skill-form-array.css',
})
export class SkillFormArray {
  form:FormGroup;
  constructor(){
    this.form=new FormGroup({
      skills:new FormArray([])
    })
  }
  get skills(){
    return this.form.get('skills') as FormArray;
  }

  addSkill(){
    this.skills.push(new FormControl(''));
  }

  removeSkill(i:number){
    this.skills.removeAt(i);
  }

}
