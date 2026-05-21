import { Component } from '@angular/core';
import {faSearch,faUserCircle,faHeart,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-header',
  imports: [FaIconComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
faSearch=faSearch;
faUserCircle=faUserCircle;
faHeart=faHeart;
faShoppingCart=faShoppingCart;
}