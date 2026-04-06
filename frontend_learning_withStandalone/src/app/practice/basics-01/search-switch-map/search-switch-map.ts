import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { SearchService } from './searchService';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-search-switch-map',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './search-switch-map.html',
  styleUrl: './search-switch-map.css',
})
export class SearchSwitchMap implements OnInit {
  searchBox= new FormControl('');
  user:any='';
  searchSer=inject(SearchService)
  ngOnInit(){
    this.searchBox.valueChanges.pipe(
      debounceTime(200),  // wait for pause
      distinctUntilChanged(), // ignore same input
      switchMap(term=>
        this.searchSer.searchUserName(term!)
      )
    ).subscribe(result=>
      this.user=result // UI update
    );

  }


  
}
