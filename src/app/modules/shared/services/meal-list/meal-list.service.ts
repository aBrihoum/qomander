import { MealCategoriesService } from './../meal-categories/meal-categories.service';
import { Injectable } from '@angular/core';
import { MEALLIST } from './meal-list.model';

@Injectable({
  providedIn: 'root',
})
export class MealListService {
  constructor(private MealCategories$: MealCategoriesService) {}

  // ~~ ~~ ~~
  private readonly mealList = MEALLIST;
  // ~~ ~~ ~~

  returnMealList() {
    const selectedCategoryKey = this.MealCategories$.selectedMealCategory.key;
    return this.mealList.filter((meal) => meal.categoryKey === selectedCategoryKey);
  }
}
