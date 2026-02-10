import { Component , inject} from '@angular/core';
import { Myservice } from '../myservice';
import { BehaviorSubjectService } from '../../rxjs-07/behavior-subject';
@Component({
  selector: 'app-component-b',
  imports: [],
  providers:[Myservice], // scope
  templateUrl: './component-b.html',
  styleUrl: './component-b.css',
})
export class ComponentB {
myService =inject(Myservice);
behaviorSubService=inject(BehaviorSubjectService) 
constructor(){
  console.log('B service id:', this.myService.instanceId);
  console.log('the hindu' , this.behaviorSubService)
}
}
