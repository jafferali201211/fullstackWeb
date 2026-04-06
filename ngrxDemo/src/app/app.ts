import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StoreModule, EffectsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngrxDemo');
  
}
