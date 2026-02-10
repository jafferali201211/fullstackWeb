import { Injectable } from '@angular/core';

@Injectable(
  //It becomes singleton shared everywhere.
  {
  providedIn: 'root',
}
//or 
// if we removed component scope
)
export class Myservice {
  readonly instanceId = crypto.randomUUID();
  count=0;
  constructor(){
    console.log('instanceID-',this.instanceId)
  }
}
