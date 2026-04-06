import { Component } from '@angular/core';
import { ChildOutput } from '../child-output/child-output';

@Component({
  selector: 'app-parent-output',
  imports: [ChildOutput],
  templateUrl: './parent-output.html',
  styleUrl: './parent-output.css',
})
export class ParentOutput {
  displayChildOutput=''
receive(getVal:any){
this.displayChildOutput =getVal;
}
}
