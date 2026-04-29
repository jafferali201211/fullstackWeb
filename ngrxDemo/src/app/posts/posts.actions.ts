import {createAction, props} from '@ngrx/store';


/**
 * @description
 * This action tells NgRx:
 * "User wants to load posts"
 * No data, just intent
 */

export const loadPosts = createAction('[Posts] Load Posts');


/**
 * @description
 * Dispatched when API call is successful
 * Carries posts data to store
 */
export const loadPostsSuccess = createAction('[Posts] Load Posts Success', props<{posts:any[]}>());


/**
 * @description
 * Dispatched when API fails
 * Carries error info
 */

export const loadPostsFailure = createAction('[Posts] Load Posts Failure', props<{error:any}>());

/* KEY THING TO REMEMBER

Action = event
No logic
Just describes WHAT happened */


//explain above code and syntax 
//1. createAction: Function from NgRx to define an action
//2. props: Function to define payload structure for actions that carry data
//3. Action type: String in square brackets to categorize actions (e.g., '[Posts] Load Posts')
//4. Action creators: Functions that return action objects when called (e.g., loadPosts(), loadPostsSuccess({posts}), loadPostsFailure({error}))    
//5. loadPosts: Action with no payload, just indicates intent to load posts
//6. loadPostsSuccess: Action with payload of posts data, dispatched on successful API call
//7. loadPostsFailure: Action with payload of error info, dispatched on failed API call
//8. These actions will be dispatched from components or effects to trigger state changes in the store based on user interactions or API 
// responses.
//9. The action type string helps in identifying the action in reducers and effects, allowing us to define how the state should change in response to each action.
//10. The props function allows us to define a structured payload for actions that need to carry data, ensuring type safety and consistency in our actions.
//11. The actions defined here will be used in the reducer to update the state based on the dispatched actions, and in effects to handle side effects like API calls.
// what is props function how to write it and why we need it
// The props function is used to define the structure of the payload for an action that carries data. It allows us to specify the properties and their types that the action will carry when dispatched. This is important for type safety and consistency in our actions, especially when we need to pass data from components or effects to the store.

// Syntax of props function:
// props<{propertyName: propertyType}>()    
// Example usage:
// export const loadPostsSuccess = createAction('[Posts] Load Posts Success', props<{posts:any[]}>());

// In this example, the loadPostsSuccess action carries a payload with a property called 'posts', which is an array of any type. When this action is dispatched, it will include the posts data that can be used in the reducer to update the state accordingly. The props function ensures that we have a clear structure for our action payloads and helps catch errors at compile time if we try to dispatch an action with an incorrect payload structure.
//property type how to write it
// The property type in the props function is defined using TypeScript's type annotations. You can specify the type of the property based on the data you expect to pass with the action. Common types include string, number, boolean, arrays, objects, or even custom interfaces.

//where is posts is coming from in loadPostsSuccess action
// The 'posts' property in the loadPostsSuccess action is defined as part of the payload structure using the props function. It is not coming from anywhere specific in the code; rather, it is a placeholder for the data that will be passed when the action is dispatched. When you dispatch the loadPostsSuccess action, you will provide an actual value for the 'posts' property, which can be an array of post objects retrieved from an API call or any other source of data in your application. The props function allows us to define this structure so that we can ensure type safety and consistency when dispatching actions with payloads.
