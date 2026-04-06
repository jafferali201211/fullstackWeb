import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements AfterContentInit {
  @ContentChild('title') title!:ElementRef<HTMLElement>  

  ngAfterContentInit(): void {
    console.log('Projected title text:',
      this.title?.nativeElement?.textContent
);
    
  }
}
