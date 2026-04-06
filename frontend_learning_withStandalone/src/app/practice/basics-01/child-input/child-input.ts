import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-child-input',
  imports: [],
  templateUrl: './child-input.html',
  styleUrl: './child-input.css',
})
export class ChildInput {
  @Input() userName!:string;
}
