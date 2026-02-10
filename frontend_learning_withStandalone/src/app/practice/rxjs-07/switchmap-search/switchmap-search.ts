import { Component, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { SearchService } from './search-service';
import { Subject, debounceTime, distinctUntilChanged, filter, switchMap, takeUntil, tap } from 'rxjs';
@Component({
  selector: 'app-switchmap-search',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './switchmap-search.html',
  styleUrl: './switchmap-search.css',
})
export class SwitchmapSearch implements OnDestroy {
  searchService = inject(SearchService)
  // 1) Input control
  searchControl = new FormControl('');

  // 2) UI state
  loading = false;
  users: any[] = [];

  // 3) cleanup notifier
  private destory$ = new Subject<void>();

  // 4) Listen to typing
  constructor() {
    this.searchControl.valueChanges.pipe(
      tap(() => {
        // 5)before processing: reset ui states
        this.loading = true;
        this.users = [];
      }),
      // 6) wait for user to stop typing
      debounceTime(400),

      //7) ensure value is string
      filter((term): term is string => typeof term === 'string'),

      // 8) Ignore short terms (optional)
      filter(term => term.trim().length >= 2),

      //9) Ignore same term typed again
      distinctUntilChanged(),

      //10)Main :cancel previous request and switch to latest 
      switchMap(term => this.searchService.searchUsers(term)),

      //11) stop when component destoryed
      takeUntil(this.destory$)

    ).subscribe(
      {
        next: (users) => {
          //12 handle success
          this.users = users;
          this.loading = false;
        },
        error: () => {
          //13 handle error
          this.loading = false;
          this.users = [];
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }
}
