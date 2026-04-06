import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() message: string = '';
  @Input() number: number = 0;
  @Input() user: { name: string; age: number } | null = null;
}
