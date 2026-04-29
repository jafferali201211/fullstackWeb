import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  constructor(private auth:Auth,private router:Router){
    if(this.auth.isLoggedIn()){
      this.router.navigate(['dashboard2']);
    }

  }

  login(){
    const mockBackendResponse ={
      token: 'mock-jwt-token',
      expiresIn:60, //1 minute
      user:{id:1,name:'ali',role:'USER'}
    }

    this.auth.login(mockBackendResponse);
    this.router.navigate(['dashboard2']);
  }


}
