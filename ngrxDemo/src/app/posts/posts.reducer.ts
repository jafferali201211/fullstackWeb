import {createReducer , on, State} from '@ngrx/store';
import * as PostsActions from './posts.actions';
// Reducer must be PURE (no API, no mutation)
// Reducer (HOW state changes)

/**
 * @description
 * Shape of posts state
 */
export interface PostsState{
    posts:any[];
    loading:boolean;
    error:any;
} 


/**
 * @description
 * Initial state when app starts
 */
export const initialState: PostsState ={
    posts:[],
    loading:false,
    error:null
};



/**
 * @description
 * Reducer is a PURE function
 * It takes current state + action
 * And returns NEW state
 */
export const postsReducer =createReducer(initialState,
    // When loadPosts action is dispatched
    on(PostsActions.loadPosts,(state)=>({
        ...state,
        loading:true,
        error:null
    })),

    // When API succeeds
    on(PostsActions.loadPostsSuccess, (state,{posts})=>({
        ...state,
        posts,
        loading:false
    })),
    on(PostsActions.loadPostsFailure, (state,{error})=>({
        ...state,
        error,
        loading:false
    }))
);

// expalin above code
/* KEY THING TO REMEMBER

Reducer = function that takes current state + action
And returns new state
No logic, no API calls, no mutation
Just describes HOW state changes based on action */
// In this case, we have three actions:
// 1. loadPosts: sets loading to true, clears error
// 2. loadPostsSuccess: updates posts, sets loading to false
// 3. loadPostsFailure: updates error, sets loading to false
// Each on() function describes how state changes for a specific action type
// The spread operator ...state is used to create a new state object based on the current state, while updating specific properties.
// This way, we ensure immutability and pure function principles in our reducer.
// The reducer listens for dispatched actions and updates the state accordingly, without any side effects or logic.
//syntax of on() function: on(actionType, (state, actionPayload) => newState)
// The actionPayload is destructured to get the relevant data (e.g., posts or error) for updating the state.
// The reducer is then registered in the appConfig to be used by the NgRx store.
// The reducer will be called automatically whenever an action is dispatched, and it will return the new state based on the logic defined in the on() functions.