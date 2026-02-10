import { Component ,inject} from '@angular/core';
import { Myservice } from '../myservice';
import { BehaviorSubjectService } from '../../rxjs-07/behavior-subject';
@Component({
  selector: 'app-component-a',
  imports: [],
  templateUrl: './component-a.html',
  styleUrl: './component-a.css',
})
export class ComponentA {
myservice =inject(Myservice);
behaviorSubService =inject(BehaviorSubjectService);

updateState(){
  this.behaviorSubService.setUserName('ali');
}


constructor(){
  console.log('A service id:', this.myservice.instanceId);
}
}
