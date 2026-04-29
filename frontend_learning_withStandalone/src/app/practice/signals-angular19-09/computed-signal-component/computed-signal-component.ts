import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signal-component',
  imports: [],
  templateUrl: './computed-signal-component.html',
  styleUrl: './computed-signal-component.css',
})
export class ComputedSignalComponent {
  price =signal(100);
  quantity =signal(2);

  //derived signal
  total = computed(()=>{
    return this.price()*this.quantity();
  })

}
