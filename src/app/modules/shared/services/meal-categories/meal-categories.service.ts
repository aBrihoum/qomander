import { Injectable } from '@angular/core';
import { CATEGORIES } from './meal-categories.model';

@Injectable({
  providedIn: 'root',
})
export class MealCategoriesService {
  constructor() {}

  categories = CATEGORIES;
  selectedCategory = this.categories[1];

  changeCategory(index: number) {
    this.selectedCategory = this.categories[index];
  }
}
