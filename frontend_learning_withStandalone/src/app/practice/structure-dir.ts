import { Directive,input,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructureDir]'
})
export class StructureDir {
  private hasView = false;
  constructor( private tpl:TemplateRef<any>,private vcr:ViewContainerRef) { }
    @Input() set appStructureDir(condition:boolean){ // alias === selector
      
if (condition && !this.hasView) {
      this.vcr.createEmbeddedView(this.tpl);
      this.hasView = true;
    } else if (!condition && this.hasView) {
      this.vcr.clear();
      this.hasView = false;
    }

    }
}
