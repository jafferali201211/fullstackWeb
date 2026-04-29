import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-change-detection-child',
  imports: [],
  templateUrl: './change-detection-child.html',
  styleUrl: './change-detection-child.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionChild implements OnChanges, DoCheck {
@Input() user!:any
private previousName!:string;
constructor(private cdr:ChangeDetectorRef){}

// ngOnChanges -> react to reference changes
ngOnChanges(changes:SimpleChanges){
  console.log("ngOnChanges fired");

  if(changes['user']){
    this.previousName= this.user.name;
  }
}

//2 ngDoCheck -> detects mutation
ngDoCheck(){
  if(this.user?.name !== this.previousName){
    console.log("ngDoCheck -> detected deep change")
    this.previousName = this.user.name

    //3 changeDetectorRef
    this.cdr.markForCheck();
  }
}

}
