import { AbstractControl } from "@angular/forms";
export function noSpaceValidator(control:AbstractControl){
    return control.value.includes(' ')
}