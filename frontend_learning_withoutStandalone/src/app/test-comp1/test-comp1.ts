import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-test-comp1',
  standalone: false,
  templateUrl: './test-comp1.html',
  styleUrl: './test-comp1.css',
})
export class TestComp1 implements OnInit{
  count = signal(0);
  history =signal<number[]>([]);
  isEven= computed(()=> this.count()%2 ===0);

  private pushHistory(n:number){
    const next = [n,...this.history()];
    this.history.set(next);
  }
  inc() { 
    this.count.update(v=> {
      const nv = v+1;
      this.pushHistory(nv);
      return nv;
    })
  }
  dec() {
    this.count.update(v=>{
      const nv = v-1;
      this.pushHistory(nv);
      return nv;
    })
  }
  reset(){
    this.count.set(0);
    this.history.set([]);
  }
  constructor(){}
  
  ngOnInit(): void {
  }

}
