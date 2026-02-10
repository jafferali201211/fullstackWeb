import { Component ,DestroyRef,inject} from '@angular/core';
import { CommonModule } from '@angular/common';

import { from, Subject } from 'rxjs';
import { concatMap, tap, finalize } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RxjsRealApi } from '../rxjs-real-api';

@Component({
  selector: 'app-rxjs-concatmap-queue-save-demo',
  // imports: [],
  // templateUrl: './rxjs-concatmap-queue-save-demo.html',
  
imports: [CommonModule],
  template: `
    <h2>concatMap (Queued Saves)</h2>

    <button (click)="saveInOrder()">Save 5 Items in Order</button>
    <button (click)="clear()">Clear Logs</button>

    <p><b>Expected:</b> Item 1 completes first, then Item 2… order is guaranteed.</p>

    <ul>
      <li *ngFor="let l of logs">{{ l }}</li>
    </ul>
  `,

  styleUrl: './rxjs-concatmap-queue-save-demo.css',
})
export class RxjsConcatmapQueueSaveDemo {
  
private destroyRef = inject(DestroyRef);
private api = inject(RxjsRealApi);
  logs: string[] = [];
  private click$ = new Subject<void>();

  constructor() {
    this.click$
      .pipe(
        tap(() => this.log('CLICK → start queued save')),

        concatMap(() => {
          const items = Array.from({ length: 5 }, (_, i) => `Queued Item ${i + 1}`);

          // from(items) creates stream: item1 → item2 → item3...
          return from(items).pipe(
            // ✅ concatMap ensures each POST completes before next starts
            concatMap(item =>
              this.api.createPost({ title: item, body: 'body', userId: 1 }).pipe(
                tap(() => this.log('SAVED ✓ ' + item))
              )
            ),
            finalize(() => this.log('DONE ✓ queue finished'))
          );
        }),

        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  saveInOrder() {
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
