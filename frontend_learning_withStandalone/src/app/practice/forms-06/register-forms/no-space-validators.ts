import{AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function noSpaceValidators(control:AbstractControl):ValidationErrors|null{
    const value = (control.value ??'').toString();
     // if user types only spaces => invalid
    if(value.trim().length ===0){
        return {noSpace : true}
    }

    return  null
}