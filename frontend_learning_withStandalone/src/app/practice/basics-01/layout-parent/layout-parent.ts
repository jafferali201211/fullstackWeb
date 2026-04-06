import { AfterContentInit, Component,ContentChild } from '@angular/core';
import { ContentHeader } from '../content-header/content-header';

@Component({
  selector: 'app-layout-parent',
  imports: [],
  templateUrl: './layout-parent.html',
  styleUrl: './layout-parent.css',
})
export class LayoutParent implements AfterContentInit{
  @ContentChild(ContentHeader) header!:ContentHeader;

  ngAfterContentInit(){
    console.log(this.header)
    console.log('Header title:', this.header?.title1);
  }

}
