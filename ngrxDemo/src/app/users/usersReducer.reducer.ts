import { createReducer, on } from "@ngrx/store";
import { updateUser } from "./usersAction.actions";

export interface UserState{
    id:number,
    name:string,
    age:number
}

export const initialState:UserState={
    id:1,
    name:'jaffer',
    age:25
};

// export const usersReducer= createReducer(initialState,
//     on(updateUser,(state,{id,name,age})=> ({...state,id,name,age}))
// )

export const usersReducer = createReducer(
  initialState,
  on(updateUser, (state, { id, name, age }) => {

    console.log('OLD STATE:', state);
    console.log('ACTION DATA:', { id, name, age });

    const newState = {
      ...state,
      id,
      name,
      age
    };

    console.log('NEW STATE:', newState);

    return newState;   // ✅ MUST return
  })
);
