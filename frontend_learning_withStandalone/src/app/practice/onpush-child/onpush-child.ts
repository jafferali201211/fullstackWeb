import { Component,Input,ChangeDetectionStrategy,DoCheck } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-onpush-child',
  imports: [],
  templateUrl: './onpush-child.html',
  styleUrl: './onpush-child.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class OnpushChild {
  @Input() user!: {name : string};
  @Input() counter= 0;
  localClicks =0;

  //Proof: This  runs when Angular checks this component
  ngDoCheck():void{
    console.log('ngDoCheck fired')
  }
  localClick(){
    this.localClicks++
    // Event comes from inside the component => triggers CD for this component
  }
}
