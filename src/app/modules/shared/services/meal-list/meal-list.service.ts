import { MealCategoriesService } from './../meal-categories/meal-categories.service';
import { Injectable } from '@angular/core';
import { MEALLIST } from './meal-list.model';

@Injectable({
  providedIn: 'root',
})
export class MealListService {
  constructor(private MealCategoriesS: MealCategoriesService) {}
  list = MEALLIST;
  mealList() {
    const selectedCategoryKey = this.MealCategoriesS.selectedCategory.key;
    return this.list.filter((meal) => meal.categoryKey === selectedCategoryKey);
  }
}
