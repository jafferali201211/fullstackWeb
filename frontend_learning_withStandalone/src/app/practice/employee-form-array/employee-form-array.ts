import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,FormGroup,FormControl ,FormArray ,Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-form-array',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './employee-form-array.html',
  styleUrl: './employee-form-array.css',
})
export class EmployeeFormArray {
  fb =inject(FormBuilder);
  
  employeeForm = this.fb.group({
    employeeName:['',[Validators.required]],
    skills:this.fb.array([this.createSkillControl()])
  })
  
// 5) Reusable method to create each skill FormControl + validators
  private createSkillControl(): FormControl {
    return this.fb.control('', [Validators.required, Validators.minLength(2)]);
  }

  // 6) A getter to access skills FormArray easily in TS + template
  get skills(): FormArray {
    return this.employeeForm.get('skills') as FormArray;
  }

  // 7) Add skill (push a new FormControl into FormArray)
  addSkill(): void {
    this.skills.push(this.createSkillControl());
  }

  // 8) Remove skill by index
  removeSkill(index: number): void {
    // Prevent removing the last row (optional, but common UX)
    if (this.skills.length > 1) {
      this.skills.removeAt(index);
    }
  }

  // 9) Submit handler
  onSubmit(): void {
    // Mark everything touched so validation errors show
    this.employeeForm.markAllAsTouched();

    if (this.employeeForm.invalid) return;

    console.log('✅ Form Value:', this.employeeForm.value);
    // output: { employeeName: 'Ali', skills: ['Angular', 'RxJS'] }
  }

}
