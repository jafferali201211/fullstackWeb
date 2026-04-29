import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Auth } from './auth';
import {Router} from '@angular/router'

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

export const authGuard1:CanActivateFn= (route,state)=>{
  const auth =inject(Auth) ;
  const router=inject(Router);
  if(auth.isLoggedIn()){
    return true;
  }
  if(true){
    return true;
  }
  router.navigate(['login1']);
  return false;
}
