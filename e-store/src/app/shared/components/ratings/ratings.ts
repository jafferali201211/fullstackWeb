import { Component, Input } from '@angular/core';
import {IconDefinition,faStar,faStarHalfStroke,faSearch,faUserCircle,faHeart,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {faStar as faStarEmpty} from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-ratings',
  imports: [FaIconComponent],
  templateUrl: './ratings.html',
  styleUrl: './ratings.scss',
})
export class Ratings {
faStar=faStar;
faStarHalfStroke=faStarHalfStroke;
faStarEmpty=faStarEmpty;
star:IconDefinition[] =[];

private _score:number= 0;

// @Input() set
}
