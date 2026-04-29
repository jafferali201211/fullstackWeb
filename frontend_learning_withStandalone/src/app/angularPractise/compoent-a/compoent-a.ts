import { Component } from '@angular/core';
import { CounterService } from '../counter-service';

@Component({
  selector: 'app-compoent-a',
  imports: [],
  templateUrl: './compoent-a.html',
  styleUrl: './compoent-a.css',
})
export class CompoentA {
  constructor(public counterService:CounterService) {}
 
  increment() {
    this.counterService.increment();
  }
 
  decrement() {
    this.counterService.decrement();
  }
 
  reset() {
    this.counterService.reset();
  }
}
