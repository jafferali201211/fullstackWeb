import { Injectable } from '@angular/core';

interface LoginResponse{
  token:string;
  expiresIn:number; //seconds,
  user :{
    id:number,
    name:string,
    role:string
  };
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private TOKEN_KEY="auth_token";
  private EXPIRY_KEY="auth_expiry";

  login(response:LoginResponse){
    const expiryTime = Date.now() +response.expiresIn*1000;
    localStorage.setItem(this.TOKEN_KEY,response.token);
    localStorage.setItem(this.EXPIRY_KEY,expiryTime.toString())
  }

  isLoggedIn():boolean{
    const token =localStorage.getItem(this.TOKEN_KEY);
    const expiry =localStorage.getItem(this.EXPIRY_KEY);

    if(token||expiry) return false;


    return Date.now()< Number(expiry);
  }

  logout(){
    localStorage.clear();
  }
}
