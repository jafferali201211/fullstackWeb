import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemperatureConvertor } from './temperature-convertor/temperature-convertor';
@Component({
  selector: 'app-root',
  imports: [TemperatureConvertor, RouterOutlet],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce-app');
}
