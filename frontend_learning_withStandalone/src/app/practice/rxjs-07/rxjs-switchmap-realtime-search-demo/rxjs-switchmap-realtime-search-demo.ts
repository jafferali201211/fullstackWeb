import { Component, DestroyRef, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Subject,of } from 'rxjs';
import { catchError, debounceTime,distinctUntilChanged,filter,finalize,switchMap,tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RxjsRealApi,Product } from '../rxjs-real-api';
@Component({
  selector: 'app-rxjs-switchmap-realtime-search-demo',
  imports: [CommonModule,FormsModule],
  templateUrl: './rxjs-switchmap-realtime-search-demo.html',
  styleUrl: './rxjs-switchmap-realtime-search-demo.css',
})
export class RxjsSwitchmapRealtimeSearchDemo {
  
 private api = inject(RxjsRealApi);
  private destroyRef = inject(DestroyRef);

  query = '';
  products: Product[] = [];
  loading = false;
  error = '';

  // WHY: Subject is the input stream of query changes
  private query$ = new Subject<string>();

  constructor() {
    this.query$
      .pipe(
        // WHY: reduce API calls while user types
        debounceTime(300),

        // WHY: don't call API if same value comes again
        distinctUntilChanged(),

        // WHY: ignore very short queries (optional)
        filter(q => q.trim().length >= 2),

        tap(q => {
          // WHY: mark UI states BEFORE API starts
          this.loading = true;
          this.error = '';
          console.log('%c[RX] query → ' + q, 'color:#6a1b9a;font-weight:bold');
        }),

        // ✅ MAIN: switchMap cancels previous request on new query
        switchMap(q =>
          this.api.searchProducts(q).pipe(
            tap(() => console.log('%c[RX] API started for: ' + q, 'color:#00897b')),

            // WHY: handle errors without breaking the stream
            catchError(err => {
              this.error = 'API error. Check Console/Network.';
              console.log('%c[RX] API error', 'color:#d32f2f', err);
              return of([] as Product[]);
            }),

            // WHY: runs on completion or cancellation (unsubscribe)
            finalize(() => {
              this.loading = false;
              console.log('%c[RX] finalize (done/cancel)', 'color:#455a64');
            })
          )
        ),

        // WHY: auto-unsubscribe when component destroyed
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(list => {
        // WHY: update UI with latest response only (switchMap guarantees it)
        this.products = list;
        console.log('%c[RX] products length = ' + list.length, 'color:#2e7d32');
      });
  }

  onQueryChange(value: string) {
    // WHY: push query changes into stream
    this.query$.next(value);
  }

}
