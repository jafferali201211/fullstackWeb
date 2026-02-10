
import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { BehaviorSubject, forkJoin, combineLatest } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RxjsRealApi, Product } from '../rxjs-real-api';

@Component({
  selector: 'app-rxjs-forkjoin-combinelatest-demo',
  // imports: [],
  // templateUrl: './rxjs-forkjoin-combinelatest-demo.html',
  
imports: [CommonModule],
  template: `
    <h2>forkJoin & combineLatest (Real APIs)</h2>

    <section style="padding:10px;border:1px solid #ddd;margin:10px 0">
      <h3>forkJoin: Run users + posts together (emit once when ALL complete)</h3>
      <button (click)="loadForkJoin()">Load Users + Posts</button>
      <p>{{ forkJoinStatus }}</p>
      <p *ngIf="usersCount">Users: {{ usersCount }} | Posts: {{ postsCount }}</p>
    </section>

    <section style="padding:10px;border:1px solid #ddd;margin:10px 0">
      <h3>combineLatest: Reactive paging (emit whenever page or limit changes)</h3>

      <button (click)="prev()">Prev</button>
      <button (click)="next()">Next</button>

      <button (click)="setLimit(5)">Limit 5</button>
      <button (click)="setLimit(10)">Limit 10</button>

      <p>Page: {{ page }} | Limit: {{ limit }}</p>

      <ul>
        <li *ngFor="let p of products">{{ p.title }} — ₹{{ p.price }}</li>
      </ul>
    </section>
  `,

  styleUrl: './rxjs-forkjoin-combinelatest-demo.css',
})
export class RxjsForkjoinCombinelatestDemo {

private api = inject(RxjsRealApi);
  private destroyRef = inject(DestroyRef);

  // forkJoin demo
  forkJoinStatus = '';
  usersCount = 0;
  postsCount = 0;

  // combineLatest demo states
  private page$ = new BehaviorSubject<number>(1);
  private limit$ = new BehaviorSubject<number>(5);

  page = 1;
  limit = 5;

  products: Product[] = [];

  constructor() {
    // ✅ combineLatest: reacts when either page or limit changes
    combineLatest([this.page$, this.limit$])
      .pipe(
        tap(([p, l]) => {
          this.page = p;
          this.limit = l;
          console.log('%c[RX] paging → page=' + p + ', limit=' + l, 'color:#6a1b9a');
        }),
        switchMap(([page, limit]) => {
          const skip = (page - 1) * limit;
          return this.api.getProducts(limit, skip);
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(list => (this.products = list));
  }

  loadForkJoin() {
    this.forkJoinStatus = 'Loading...';

    forkJoin({
      users: this.api.getUsers(),
      posts: this.api.getPosts(),
    })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ users, posts }) => {
          this.usersCount = users.length;
          this.postsCount = posts.length;
          this.forkJoinStatus = 'Loaded successfully ✅';
        },
        error: () => {
          this.forkJoinStatus = 'Error loading ❌';
        },
      });
  }

  next() {
    this.page$.next(this.page$.value + 1);
  }

  prev() {
    this.page$.next(Math.max(1, this.page$.value - 1));
  }

  setLimit(n: number) {
    this.limit$.next(n);
    this.page$.next(1); // reset to page 1 when limit changes (real UX behavior)
  }

}
