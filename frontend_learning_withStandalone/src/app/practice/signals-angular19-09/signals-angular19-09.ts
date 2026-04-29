import { Component, computed, effect, input ,signal} from '@angular/core';
import { ComputedSignalComponent } from './computed-signal-component/computed-signal-component';
import { ParentInputSignalComponent } from './parent-input-signal-component/parent-input-signal-component';

@Component({
  selector: 'app-signals-angular19-09',
  imports: [ComputedSignalComponent,ParentInputSignalComponent],
  templateUrl: './signals-angular19-09.html',
  styleUrl: './signals-angular19-09.css',
})
export class SignalsAngular1909 {

  count= signal(0);
  // count= signal(0)
  constructor(){
    
  }
  increment(){
   
    this.count.update(c=>c++);
  }
  decrement(){
    this.count.update(c=>c--);
  }

  
}
