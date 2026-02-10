import { Component, computed, effect, input ,signal} from '@angular/core';

@Component({
  selector: 'app-signals-angular19-09',
  imports: [],
  templateUrl: './signals-angular19-09.html',
  styleUrl: './signals-angular19-09.css',
})
export class SignalsAngular1909 {
  count = signal(0);
  
  doubleCount = computed(()=>this.count()*2);

  constructor(){
    this.count.set(5);
    this.count.update((v)=>v+1)
  }
  inc(){
    this.count.update((val)=>val+2)
  }
}
