import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { selectAllPosts, selectLoading } from './posts/posts.selectors';
import { loadPosts } from './posts/posts.actions';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StoreModule, EffectsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngrxDemo');
  
posts$: Observable<any[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.posts$ = this.store.select(selectAllPosts);
    this.loading$ = this.store.select(selectLoading);
  }

  load() {
    this.store.dispatch(loadPosts());
  }

}
