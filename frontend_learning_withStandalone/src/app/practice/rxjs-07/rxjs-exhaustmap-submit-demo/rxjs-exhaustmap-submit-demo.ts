import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { exhaustMap, tap, finalize } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RxjsRealApi } from '../rxjs-real-api';
@Component({
  selector: 'app-rxjs-exhaustmap-submit-demo',
  // imports: [],
  // templateUrl: './rxjs-exhaustmap-submit-demo.html',
  
imports: [CommonModule],
  template: `
    <h2>exhaustMap (Prevent Double Submit)</h2>

    <button (click)="submit()">Submit (click fast!)</button>
    <p *ngIf="busy" style="color:#1976d2"><b>Submitting...</b></p>

    <ul>
      <li *ngFor="let l of logs">{{ l }}</li>
    </ul>
  `,

  styleUrl: './rxjs-exhaustmap-submit-demo.css',
})
export class RxjsExhaustmapSubmitDemo {
  
private api = inject(RxjsRealApi);
  private destroyRef = inject(DestroyRef);

  private submit$ = new Subject<void>();

  logs: string[] = [];
  busy = false;

  constructor() {
    this.submit$
      .pipe(
        tap(() => {
          this.busy = true;
          this.log('CLICK → submit requested');
        }),

        // ✅ exhaustMap ignores new clicks while request is in progress
        exhaustMap(() =>
          this.api.createPost({ title: 'LOGIN', body: 'submit', userId: 1 }).pipe(
            tap(() => this.log('SUBMIT ✓ completed')),
            finalize(() => (this.busy = false))
          )
        ),

        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  submit() {
    this.submit$.next();
  }

  private log(msg: string) {
    const t = new Date().toLocaleTimeString();
    this.logs.unshift(`${t} — ${msg}`);
  }

}
