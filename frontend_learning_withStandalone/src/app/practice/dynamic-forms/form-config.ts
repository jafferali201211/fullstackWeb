import { Validators } from '@angular/forms';
export const formConfig = [
    {
        label: 'name',
        type: 'text',
        controlName: 'name',
        validators: [Validators.required]
    },
    {
        label: "age",
        type: "number",
        controlName: 'age',
        validators: [Validators.required, Validators.min(1)]
    },
    {
        label: 'Email',
        type: 'email',
        controlName: 'email',
        validators: [Validators.required, Validators.email]
    }



]