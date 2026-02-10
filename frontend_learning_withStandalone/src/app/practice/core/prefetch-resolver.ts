import { ResolveFn } from '@angular/router';

// ******What is resolvers ?*********
// resolvers allow you to fetch data before navigating to a route, ensuring that your components receive the data they need before rendering. This can help prevent the need for loading states and improve the user experience by pre-loading essential data.
//The router waits for the data to be resolved before the route is finally activated.

export const prefetchResolver: ResolveFn<{message:string}> = (route, state) => {
  return {message:'Prefetched data ready before component loads'};
};


