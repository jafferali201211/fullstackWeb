import { Injectable} from "@angular/core";
import {Actions,createEffect,ofType} from '@ngrx/effects';// to listen to actions and create effects
import { of } from "rxjs"; // to create observable from static value
import {catchError, map,mergeMap}from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import * as PostsActions from './posts.actions'; // to import actions defined in posts.actions.ts

@Injectable()

export class PostsEffects{
    constructor(private actions$:Actions,private http:HttpClient){}

    loadPosts$ = createEffect(()=>
        this.actions$.pipe(
            // Listen only for loadPosts action
            ofType(PostsActions.loadPosts), // when loadPosts action is dispatched
            mergeMap(()=>
                this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').pipe(
                    // On success, dispatch loadPostsSuccess action with posts data
                    map(posts=>PostsActions.loadPostsSuccess({posts})),

                    // On failure, dispatch loadPostsFailure action with error info

                    catchError((error)=>of(PostsActions.loadPostsFailure({error})))
                )
        ))
    );
}

// explain above code with syntax
/* KEY THING TO REMEMBER

Effects = listen to actions and perform side effects (e.g., API calls)
1. @Injectable: Decorator to make the class injectable as a service
2. Actions: Stream of dispatched actions that we can listen to
3. createEffect: Function to define an effect that listens to actions and performs side effects
4. ofType: Operator to filter actions by type (e.g., loadPosts)
5. mergeMap: Operator to handle observable from API call and dispatch new actions based on result
6. map: Operator to transform API response into a success action
7. catchError: Operator to handle errors from API call and dispatch a failure action
8. HttpClient: Angular service to make HTTP requests
9. loadPosts$: Effect that listens for loadPosts action, makes API call, and dispatches success or failure actions based on the result.
10. The effect is defined as an observable stream that reacts to specific actions and performs side effects without directly mutating the state, following the principles of NgRx effects.
11. The actions dispatched from the effect will be handled by the reducer to update the state accordingly, allowing for a clear separation of concerns between state management and side effects.
12. The use of of() in catchError allows us to return an observable that emits the failure action, ensuring that the effect continues to work even when an error occurs during the API call.
13. The loadPosts$ effect will be registered in the appConfig to be used by the NgRx effects module, allowing it to listen for dispatched actions and perform the defined side effects when those actions occur.
14. The syntax of createEffect is: createEffect(() => this.actions$.pipe(...)), where we define the logic for listening to actions and performing side effects within the pipe() function.
15. The ofType operator is used to filter the actions stream to only react to specific action types, ensuring that the effect only responds to relevant actions and not all dispatched actions in the application.
16. The mergeMap operator is used to handle the observable returned by the HTTP request, allowing us to dispatch new actions based on the success or failure of the API call without blocking the stream of actions.
17. The map operator is used to transform the successful API response into a new action (loadPostsSuccess) that carries the posts data, while catchError handles any errors by dispatching a failure action (loadPostsFailure) with the error information.
18. This structure allows for a clean and organized way to handle side effects in an NgRx application, keeping the effects separate from the reducers and components, and ensuring that state management remains predictable and maintainable. */   