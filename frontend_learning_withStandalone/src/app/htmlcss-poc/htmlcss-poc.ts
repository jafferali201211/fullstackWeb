import { Component } from '@angular/core';
import { UserCard } from './user-card/user-card';
import { SpecificityDemo } from './specificity-demo/specificity-demo';
import { FlexNavbar } from './flex-navbar/flex-navbar';
import { DashboardGrid } from './dashboard-grid/dashboard-grid';
import { ToggleCard } from './toggle-card/toggle-card';
import { NotificationBadge } from './notification-badge/notification-badge';

@Component({
  selector: 'app-htmlcss-poc',
  imports: [NotificationBadge,ToggleCard,DashboardGrid,FlexNavbar,SpecificityDemo,UserCard],
  templateUrl: './htmlcss-poc.html',
  styleUrl: './htmlcss-poc.css',
})
export class HtmlcssPOC {

}
