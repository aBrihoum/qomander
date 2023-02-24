import { MealListService } from './../meal-list/meal-list.service';
import { Injectable } from '@angular/core';
import { CATEGORIES } from './meal-categories.model';

@Injectable({
  providedIn: 'root',
})
export class MealCategoriesService {
  constructor() {}

  readonly mealCategories = CATEGORIES;
  selectedMealCategory = this.mealCategories[0];

  changeMealCategory(index: number) {
    this.selectedMealCategory = this.mealCategories[index];
  }
}
