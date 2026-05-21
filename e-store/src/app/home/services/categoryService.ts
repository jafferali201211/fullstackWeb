import { Injectable } from '@angular/core';
import {Category} from '../types/category.type'
import { categories } from '../sampleData/categories.data';
@Injectable({
  providedIn: 'root', //provider for the service, it will be available throughout the app
})
export class CategoryService {
  getAllCategories():Category[] {
    return categories;
  }
}
