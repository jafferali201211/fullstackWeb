import { Component } from '@angular/core';
import { ReactiveFormsModule ,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-control-example',
  imports: [ReactiveFormsModule],
  templateUrl: './form-control-example.html',
  styleUrl: './form-control-example.css',
})
export class FormControlExample {
  name = new FormControl('jaffer',Validators.required);
}
