import {createFeatureSelector,createSelector} from '@ngrx/store';
import {UserState} from './usersReducer.reducer';


export const selectUserState = createFeatureSelector<UserState>('users');

export const selectUser=createSelector(selectUserState,(state)=> state);