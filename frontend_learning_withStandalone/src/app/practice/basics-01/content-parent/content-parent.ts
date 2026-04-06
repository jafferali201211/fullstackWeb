import { Component } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-content-parent',
  imports: [Card],
  templateUrl: './content-parent.html',
  styleUrl: './content-parent.css',
})
export class ContentParent {

}
