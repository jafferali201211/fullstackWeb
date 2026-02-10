import { Component,inject } from '@angular/core';
import {Router} from '@angular/router';
import { Auth } from '../../core/auth';
@Component({
  selector: 'app-route-login-demo',
  imports: [],
  templateUrl: './route-login-demo.html',
  styleUrl: './route-login-demo.css',
})
export class RouteLoginDemo {
  router= inject(Router);
  authService =inject(Auth);

// WHY: simple action simulating auth flow.
  loginUser(){
    this.authService.login(false);
    this.router.navigateByUrl('/dashboard');
  }
  loginAdmin(){
    this.authService.login(true);
    this.router.navigateByUrl('/admin')
  }

}
