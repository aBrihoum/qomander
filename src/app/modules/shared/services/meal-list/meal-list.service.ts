import { MealCategoriesService } from './../meal-categories/meal-categories.service';
import { Injectable } from '@angular/core';
import MEALLIST_JSON from '../../../../../assets/db/meal-list.json';
import { MealListT } from './meal-list.model';

@Injectable({
  providedIn: 'root',
})
export class MealListService {
  constructor(private MealCategoriesService: MealCategoriesService) {}

  private readonly mealList: MealListT[] = MEALLIST_JSON as MealListT[];

  returnMealList() {
    const selectedCategoryKey = this.MealCategoriesService.selectedMealCategory.key;
    return this.mealList.filter((meal) => meal.categoryKey === selectedCategoryKey);
  }
}