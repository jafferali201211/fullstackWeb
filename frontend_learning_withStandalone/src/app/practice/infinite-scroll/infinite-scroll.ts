import { Component, Host, HostListener, inject } from '@angular/core';
import { InfiniteScrollService } from './infinite-scroll-service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-infinite-scroll',
  imports: [CommonModule],
  templateUrl: './infinite-scroll.html',
  styleUrl: './infinite-scroll.css',
})
export class InfiniteScroll {
  // infiniteService= inject(InfiniteScrollService);
  posts:any[]=[];
  page=1;
  limit =10;
  loading =false;
  hasMore=true;

  constructor(private infiniteService:InfiniteScrollService){

  }
  loadData(){
    this.loading=true;

    this.infiniteService.getPosts(this.page,this.limit).subscribe(data => {
      // stop when api return empty array
      console.log(data);
      if(data.length===0){
        this.hasMore=false;
      }else{

      this.posts =[...this.posts,...data];
      this.page++;
      }
    })
  }

  @HostListener('window:scroll',[]) scrollHandler(){
   if(this.isNearBottom() && !this.loading && this.hasMore){
    this.loadData();
   }
  }

  isNearBottom():boolean{
    const threshold=100;
    const position =window.innerHeight + window.scrollY;
    const height =document.body.offsetHeight;
    return position >= height -threshold;;
  }
}
