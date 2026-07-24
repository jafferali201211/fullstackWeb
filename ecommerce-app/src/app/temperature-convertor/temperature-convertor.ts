import { Component ,inject,OnInit} from '@angular/core';
import {ReactiveFormsModule,FormBuilder,FormGroup,FormArray} from '@angular/forms';
@Component({
  selector: 'app-temperature-convertor',
  imports: [ReactiveFormsModule],
  templateUrl: './temperature-convertor.html',
  styleUrl: './temperature-convertor.css',
})
export class TemperatureConvertor implements OnInit {
  fb= inject(FormBuilder);
  temparatureForm=this.fb.group({
    celsius:[''],
    fahrenheit:['']
  })
  ngOnInit(){
    console.log(this.temparatureForm);
  }
  onCelsiusChange(){
    const celsiusValue:number=Number(this.temparatureForm.get('celsius')?.value);
    if(celsiusValue!==null){
      const fahrenheitValue:number=(celsiusValue*(9/5)) +32;
      this.temparatureForm.get('fahrenheit')?.setValue(String(fahrenheitValue));
    }
  }
  onFahrenheitChange(){
    const fahrenheitValue:number= Number(this.temparatureForm.get('fahrenheit')?.value);
  if(fahrenheitValue!==null){
    const celsiusValue:number=((fahrenheitValue)-32)*(5/9);
    this.temparatureForm.get('celsius')?.setValue(String(celsiusValue));
  }
  }
}
