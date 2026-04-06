import { Component } from '@angular/core';
import { ChildInput } from '../child-input/child-input';

@Component({
  selector: 'app-parent-input',
  imports: [ChildInput],
  templateUrl: './parent-input.html',
  styleUrl: './parent-input.css',
})
export class ParentInput {
  name ="jaffer";
}
