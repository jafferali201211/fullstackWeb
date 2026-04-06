import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component2 } from './component/component2/component2';
import { Component1 } from './component/component1/component1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Component1,Component2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dcxAngularTraining');
}
