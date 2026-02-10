import { CanActivateFn ,Router} from '@angular/router';
// Router is a class uesd to navigate between pages(routes) programmaticaly and to control routing behavior
import {inject } from '@angular/core';
import { Auth } from './auth';
export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth); // class instnace
  const router = inject(Router); // class instnace

  if(!authService.isLoggedIn()){
    return router.parseUrl('/login');
  }
  // WHY: check role only after login check.
  if(authService.role()=='admin'){
    return true;
  }

  // WHY: deny access to admin route for non-admin user.
  return router.parseUrl('/dashboard');
};


