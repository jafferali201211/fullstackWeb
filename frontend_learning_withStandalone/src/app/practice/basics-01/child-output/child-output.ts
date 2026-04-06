import { Component, EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-child-output',
  imports: [],
  templateUrl: './child-output.html',
  styleUrl: './child-output.css',
})
export class ChildOutput {
@Output() notify = new EventEmitter<string>();
send(){
  this.notify.emit('Message from child');
}
}
