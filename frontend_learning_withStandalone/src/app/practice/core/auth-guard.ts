import { ActivatedRouteSnapshot, CanActivateFn,Router, RouterStateSnapshot } from '@angular/router';
import {Auth} from './auth';
import {inject} from '@angular/core';

//CanActivateFn is a route guard in angular that determines whether a route can be activated based on conditions like authentication or authorization 
export const authGuard: CanActivateFn = (route, state) => {
  //ActivatedRouteSnapshot - it will contains: Route params , Query params, Route data 
  //RouterStateSnapshot - current url , full router state
  const authService =inject(Auth);

  //inject -> inject() is a function, not a class. it is used to get instance of a class (service) when constructor injection is not possible
  const router = inject(Router); // class instnace

  // WHY: guard returns boolean or UrlTree. UrlTree is best for redirects.
  if(authService.isLoggedIn()){
    return true;
  }

  // WHY: redirect to login instead of showing blank page
  return router.parseUrl('/login');

  
};
