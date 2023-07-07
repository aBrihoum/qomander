import { Injectable } from '@angular/core';
import { MealCategoriesT } from './meal-categories.model';
import MEALCATEGORIES_JSON from '../../../../../assets/db/meal-categories.json';
@Injectable({
  providedIn: 'root',
})
export class MealCategoriesService {
  constructor() {}

  private readonly _mealCategories: MealCategoriesT[] = MEALCATEGORIES_JSON as MealCategoriesT[];
  private _selectedMealCategory = this._mealCategories[0];

  setMealCategory(index: number) {
    this._selectedMealCategory = this._mealCategories[index];
  }

  get selectedMealCategory(): MealCategoriesT {
    return this._selectedMealCategory;
  }

  get mealCategories(): MealCategoriesT[] {
    return this._mealCategories;
  }
}
