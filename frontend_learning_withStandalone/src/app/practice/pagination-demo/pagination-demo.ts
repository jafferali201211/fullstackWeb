import { Component ,inject} from '@angular/core';
import {PaginationService} from './pagination-service'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pagination-demo',
  imports: [CommonModule],
  templateUrl: './pagination-demo.html',
  styleUrl: './pagination-demo.css',
})
export class PaginationDemo {
  page= 1;
  limit=5;
  posts:any[]=[];
  paginationService=inject(PaginationService)
  
  ngOnInit(){
    this.loadData();
  }
  loadData(){
    this.paginationService.getData(this.page,this.limit).subscribe(data=>{
     this.posts=data; // replace old data
    })
    //or
    // this.posts=this.paginationService.getData(this.page,this.limit).subscribe(data=>{
    //  return data; // replace old data
    // })

  }
  next(){
    this.page++;
    this.loadData();
  }
  prev(){
    if(this.page<1){
      this.page--;
      this.loadData();
    }
    
  }

}
