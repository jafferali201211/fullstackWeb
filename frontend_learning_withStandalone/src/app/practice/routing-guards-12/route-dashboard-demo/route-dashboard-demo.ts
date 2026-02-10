import { Component ,inject} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { Auth } from '../../core/auth';
@Component({
  selector: 'app-route-dashboard-demo',
  imports: [],
  templateUrl: './route-dashboard-demo.html',
  styleUrl: './route-dashboard-demo.css',
})
export class RouteDashboardDemo {
  authService =inject(Auth);
  router= inject(Router);
  route =inject(ActivatedRoute)

  // WHY: resolver data is available immediately when component starts.
  message=this.route.snapshot.data['prefetch']?.message??'No data';

  goAdmin(){
    this.router.navigateByUrl('/admin');
  }
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login')
  }
}
