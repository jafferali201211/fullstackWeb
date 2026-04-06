import {Directive,ElementRef,inject,OnInit,Input, Renderer2,HostListener} from '@angular/core';
@Directive({
  selector:'[appHightlight]',
})
export class Highlight implements OnInit{
  element =inject(ElementRef);
  renderer =inject(Renderer2)
  @Input('appHightlight') background='#fffa8b'; // alias === selector
  @Input() highlightTextColor = '#333'; 
  
  constructor(){
     
  }
  ngOnInit(){
  //  this.element.nativeElement.style.backgroundColor='yellow';
  // this.color ="lightblue";
  }
 
  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'background', this.background);
    this.renderer.setStyle(this.element.nativeElement, 'color', this.highlightTextColor);
    this.renderer.setStyle(this.element.nativeElement, 'transition', 'all .2s ease');
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.removeStyle(this.element.nativeElement, 'background');
    this.renderer.removeStyle(this.element.nativeElement, 'color');
  }

}