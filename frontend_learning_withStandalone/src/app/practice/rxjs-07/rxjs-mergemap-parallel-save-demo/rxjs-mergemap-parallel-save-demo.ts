import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { from, Subject } from 'rxjs';
import { mergeMap, tap, finalize, catchError } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RxjsRealApi } from '../rxjs-real-api';

@Component({
  selector: 'app-rxjs-mergemap-parallel-save-demo',
  imports: [CommonModule],
  // templateUrl: './rxjs-mergemap-parallel-save-demo.html',
  
template: `
    <h2>mergeMap (Parallel Saves)</h2>

    <button (click)="saveParallel()">Save 5 Items in Parallel</button>
    <button (click)="clear()">Clear Logs</button>

    <p><b>Expected:</b> Requests run at the same time, responses can return in any order.</p>

    <ul>
      <li *ngFor="let l of logs">{{ l }}</li>
    </ul>
  `,

  styleUrl: './rxjs-mergemap-parallel-save-demo.css',
})
export class RxjsMergemapParallelSaveDemo {
  
private api = inject(RxjsRealApi);
  private destroyRef = inject(DestroyRef);

  logs: string[] = [];
  private click$ = new Subject<void>();

  constructor() {
    this.click$
      .pipe(
        tap(() => this.log('CLICK → start parallel save')),

        // WHY: create a stream of items to save
        mergeMap(() => {
          const items = Array.from({ length: 5 }, (_, i) => `Parallel Item ${i + 1}`);
          return from(items).pipe(
            // ✅ mergeMap inside: fire all POST requests concurrently
            mergeMap(item =>
              this.api.createPost({ title: item, body: 'body', userId: 1 }).pipe(
                tap(() => this.log('SAVED ✓ ' + item)),
                catchError(err => {
                  this.log('ERROR ✖ ' + item);
                  console.log(err);
                  throw err;
                })
              )
            ),
            finalize(() => this.log('DONE ✓ parallel batch finished'))
          );
        }),

        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  saveParallel() {
    this.click$.next();
  }

  clear() {
    this.logs = [];
  }

  private log(msg: string) {
    const t = new Date().toLocaleTimeString();
    this.logs.unshift(`${t} — ${msg}`);
  }

}
