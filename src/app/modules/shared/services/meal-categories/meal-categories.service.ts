import { Injectable } from '@angular/core';
import { MealCategoriesT } from './meal-categories.model';
import MEALCATEGORIES_JSON from '../../../../../assets/db/meal-categories.json';
@Injectable({
  providedIn: 'root',
})
export class MealCategoriesService {
  constructor() {}

  private readonly mealCategories: MealCategoriesT[] = MEALCATEGORIES_JSON as MealCategoriesT[];
  private selectedMealCategory = this.mealCategories[0];

  changeMealCategory(index: number) {
    this.selectedMealCategory = this.mealCategories[index];
  }

  returnMealCategories(): MealCategoriesT[] {
    return this.mealCategories;
  }

  returnSelectedMealCategory(): MealCategoriesT {
    return this.selectedMealCategory;
  }
}
