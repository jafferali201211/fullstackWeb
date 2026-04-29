import { Component } from '@angular/core';
import { Auth } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
constructor(private auth:Auth,private router:Router){
}
logout(){
  this.auth.logout();
  this.router.navigate(['login1']);
}

}
