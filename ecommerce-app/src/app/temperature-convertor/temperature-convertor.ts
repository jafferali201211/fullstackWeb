import { Component ,inject,OnInit} from '@angular/core';
import {ReactiveFormsModule,FormBuilder,FormGroup,FormArray} from '@angular/forms';
@Component({
  selector: 'app-temperature-convertor',
  imports: [ReactiveFormsModule],
  templateUrl:'./temperature-convertor.html',
  styleUrl: './temperature-convertor.css',
})
export class TemperatureConvertor implements OnInit {
  fb= inject(FormBuilder);
  temparatureForm=this.fb.group({
    celsius:[''],
    fahrenheit:['']
  })
  ngOnInit(){
    //Better Approach 3: Subscribe to Both Controls
    this.temparatureForm.get('celsius')?.valueChanges.subscribe((value)=>{
      const fahrenheit:number=(Number(value)*(9/5))+32;
      this.temparatureForm.get('fahrenheit')?.patchValue(String(fahrenheit), { emitEvent: false });
    });
    this.temparatureForm.get('fahrenheit')?.valueChanges.subscribe((value)=>{
      const celsius:number=(Number(value)-32)*(5/9);
      this.temparatureForm.get('celsius')?.patchValue(String(celsius), { emitEvent: false });
    });
  }
  // Approach 2: using reactive form and form builder to create a form group with two controls for celsius and fahrenheit. The onCelsiusChange and onFahrenheitChange methods are used to convert the temperature values when the user inputs a value in either field.
  // onCelsiusChange(){
  //   const celsiusValue:number=Number(this.temparatureForm.get('celsius')?.value);
  //   if(celsiusValue!==null){
  //     const fahrenheitValue:number=(celsiusValue*(9/5)) +32;
  //     this.temparatureForm.get('fahrenheit')?.setValue(String(fahrenheitValue));
  //   }
  // }
  // onFahrenheitChange(){
  //   const fahrenheitValue:number= Number(this.temparatureForm.get('fahrenheit')?.value);
  // if(fahrenheitValue!==null){
  //   const celsiusValue:number=((fahrenheitValue)-32)*(5/9);
  //   this.temparatureForm.get('celsius')?.setValue(String(celsiusValue));
  // }
  // }
}
