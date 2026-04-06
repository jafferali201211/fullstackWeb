import { Component } from '@angular/core';
import { Panel } from '../panel/panel';

@Component({
  selector: 'app-parent-panel',
  imports: [Panel],
  templateUrl: './parent-panel.html',
  styleUrl: './parent-panel.css',
})
export class ParentPanel {

}
