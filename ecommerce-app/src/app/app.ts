import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemperatureConvertor } from './temperature-convertor/temperature-convertor';
import { CssTutor } from './css-tutor/css-tutor';
import { EmployeeListing } from './employee-listing/employee-listing';

@Component({
  selector: 'app-root',
  imports: [CssTutor, EmployeeListing, RouterOutlet],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce-app');
}
