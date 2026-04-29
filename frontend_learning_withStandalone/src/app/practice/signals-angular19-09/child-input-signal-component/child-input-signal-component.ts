import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child-input-signal-component',
  imports: [],
  templateUrl: './child-input-signal-component.html',
  styleUrl: './child-input-signal-component.css',
})
export class ChildInputSignalComponent {
// @Input()
message = input<string>();
}
