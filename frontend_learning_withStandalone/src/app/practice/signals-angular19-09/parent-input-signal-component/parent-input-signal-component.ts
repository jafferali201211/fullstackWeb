import { Component, signal } from '@angular/core';
import { ChildInputSignalComponent } from '../child-input-signal-component/child-input-signal-component';

@Component({
  selector: 'app-parent-input-signal-component',
  imports: [ChildInputSignalComponent],
  templateUrl: './parent-input-signal-component.html',
  styleUrl: './parent-input-signal-component.css',
})
export class ParentInputSignalComponent {
parentMsg = signal('Hello');
}
