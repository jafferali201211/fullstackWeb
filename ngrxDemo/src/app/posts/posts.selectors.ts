import { createSelector,createFeatureSelector } from "@ngrx/store";
import {PostsState} from './posts.reducer';

// Selectors are functions that select a piece of state from the store
// They are used in components to get data from the store


/**
 * @description
 * Select posts feature state
 */
export const selectPostsState =
  createFeatureSelector<PostsState>('posts'); // 'posts' is the name of the feature state defined in app.config.ts

/**
 * @description
 * Select posts array
 */
export const selectAllPosts = 
  createSelector(
    selectPostsState,
    state => state.posts
  ); 

/**
 * @description
 * Select loading flag
 */
export const selectLoading =
  createSelector(
    selectPostsState,
    state => state.loading
  );
