import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import * as PostsActions from './posts.actions';

@Injectable()
export class PostsEffects {

  constructor(
    private actions$: Actions,   // ✅ injected by NgRx
    private http: HttpClient     // ✅ injected by Angular
  ) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PostsActions.loadPosts),

      mergeMap(() =>
        this.http.get<any[]>(
          'https://jsonplaceholder.typicode.com/posts'
        ).pipe(
          map(posts =>
            PostsActions.loadPostsSuccess({ posts })
          ),

          catchError(error =>
            of(PostsActions.loadPostsFailure({ error }))
          )
        )
      )
    );
  });
}