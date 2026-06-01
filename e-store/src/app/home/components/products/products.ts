import { Component } from '@angular/core';
import { ProductsService } from './products-service';
import { ProductListItem } from './products.type';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
  providers:[ProductsService]
})
export class Products {
// generate if required
products:ProductListItem[] =[];
constructor(private productsService:ProductsService){
  this.products= this.productsService.getProductsList();
  console.log(this.products);  
}
}
