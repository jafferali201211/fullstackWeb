import { Component } from '@angular/core';
import { ParentInput } from './parent-input/parent-input';
import { ParentOutput } from './parent-output/parent-output';
import { ViewChildComponent } from './view-child-component/view-child-component';
import { ContentParent } from './content-parent/content-parent';
import { LayoutParent } from './layout-parent/layout-parent';
import { SearchSwitchMap } from './search-switch-map/search-switch-map';

@Component({
  selector: 'app-basics-01',
  imports: [SearchSwitchMap,ContentParent,LayoutParent,ParentInput,ParentOutput,ViewChildComponent],
  templateUrl: './basics-01.html',
  styleUrl: './basics-01.css',
})
export class Basics01 {

}
