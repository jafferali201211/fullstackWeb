import { Component } from '@angular/core';
import { CounterService } from '../counter-service';

@Component({
  selector: 'app-compoent-b',
  imports: [],
  templateUrl: './compoent-b.html',
  styleUrl: './compoent-b.css',
})
export class CompoentB {
constructor(public counterService: CounterService) {}
}
