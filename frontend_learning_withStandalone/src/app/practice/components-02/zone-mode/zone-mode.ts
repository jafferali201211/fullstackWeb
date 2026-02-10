import { Component,signal,computed, effect } from '@angular/core';

@Component({
  selector: 'app-zone-mode',
  imports: [],
  templateUrl: './zone-mode.html',
  styleUrl: './zone-mode.css',
})
export class ZoneMode {
  //signals (work in both zone &zoneless)
  count = signal(0);
  doubled = computed(()=> this.count() * 2)

  delayedMessage = 'waiting..';

  constructor(){
    // in zone mode, setTtimeout will auto-trigger change detection 
    setTimeout(()=>{
      this.delayedMessage ="timeout done! (auto-upated)";
    },10000);

    //effects (runs when count changes)
    effect(()=>{
      console.log('effect count ',this.count())
    })
  }
  increment(){
    this.count.update(v => v+1)
  }
}
