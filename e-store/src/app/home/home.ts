import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { CategoryNavigation } from './components/category-navigation/category-navigation';
import { Sidenavigation } from './components/sidenavigation/sidenavigation';
import { Products } from './components/products/products';

@Component({
  selector: 'app-home',
  imports: [Products,Sidenavigation, Header, CategoryNavigation],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
