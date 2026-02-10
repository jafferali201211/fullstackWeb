import { Directive,ElementRef, Input, Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appCustomHighlight]'
})
export class CustomDirective {
  @Input('appCustomHighlight') color='yellow'; // alias === selector

  constructor(private el : ElementRef,private renderer:Renderer2) { }

  @HostListener('mouseenter')
  onEnter(){
    this.renderer.setStyle(this.el.nativeElement,'background',this.color);
    this.renderer.setStyle(this.el.nativeElement,'transition','background 200ms ease');
  }

  @HostListener('mouseleave')
  onLeave(){
    this.renderer.removeStyle(this.el.nativeElement,'background')
  }
}
