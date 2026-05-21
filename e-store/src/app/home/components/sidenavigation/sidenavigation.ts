import { Component } from '@angular/core';
import { Category } from '../../types/category.type';
import { CategoryService } from '../../services/categoryService';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidenavigation',
  imports: [CommonModule],
  templateUrl: './sidenavigation.html',
  styleUrl: './sidenavigation.scss',
})
export class Sidenavigation {
  categories: Category[] = [];
  constructor(private categoryService: CategoryService) {
    this.categories = this.categoryService.getAllCategories();
  }
  getCategories(parentCategoryId?: number): Category[] {
    return this.categories.filter((category) => category.parent_category_id === parentCategoryId)
  }

}
