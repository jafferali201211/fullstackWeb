import { Component ,computed,effect,inject, signal} from '@angular/core';
import {ReactiveFormsModule,Validators,FormBuilder,FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-signal-reactive-forms',
  imports: [],
  templateUrl: './signal-reactive-forms.html',
  styleUrl: './signal-reactive-forms.css',
})
export class SignalReactiveForms {

// Form
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  // UI signals
  showPassword = signal(false);
  statusMessage = signal('');

  // derived signal based on the form
  isFormValid = computed(() => this.loginForm.valid);

  constructor() {
    effect(() => {
      if (this.loginForm.valid) {
        this.statusMessage.set('Form looks good!');
      } else {
        this.statusMessage.set('Please fill required fields.');
      }
    });
  }

  toggleShowPassword() {
    this.showPassword.update(v => !v);
  }

}
