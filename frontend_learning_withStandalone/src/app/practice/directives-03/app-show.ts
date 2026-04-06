import { Directive,TemplateRef,ViewContainerRef ,inject,Input} from '@angular/core';

@Directive({
  selector: '[appShow]'
})
export class AppShow {
  templateRef =inject(TemplateRef);
  vcr =inject(ViewContainerRef)
  constructor() { }

  @Input() set appShow(condition:Boolean){
    this.vcr.clear();
    if(condition){
      this.vcr.createEmbeddedView(this.templateRef)
    }
  } 

  



}
