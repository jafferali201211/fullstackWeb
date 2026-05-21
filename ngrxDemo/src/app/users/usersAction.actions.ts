import {createAction,props} from '@ngrx/store';

export const updateUser=createAction('[User] Update user',props<{id:number,name:string,age:number}>())

// Action = “User wants to update data”