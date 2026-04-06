import { Component, ElementRef, ViewChild ,AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-view-child-component',
  imports: [],
  templateUrl: './view-child-component.html',
  styleUrl: './view-child-component.css',
})
export class ViewChildComponent implements AfterViewInit{
@ViewChild('box') box!: ElementRef<HTMLInputElement>;
ngAfterViewInit(){
  fromEvent(this.box.nativeElement,'input').subscribe(()=> console.log(this.box.nativeElement.value));

}
}
