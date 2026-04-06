import { Component ,ViewContainerRef,TemplateRef,inject} from '@angular/core';

@Component({
  selector: 'app-view-container',
  imports: [],
  templateUrl: './view-container.html',
  styleUrl: './view-container.css',
})
export class ViewContainer {

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) {}

  
  
}
