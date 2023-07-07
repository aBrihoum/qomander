import { Injectable } from '@angular/core';
import { MealCategoriesT } from './meal-categories.model';
import MEALCATEGORIES_JSON from '../../../../../assets/db/meal-categories.json';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MealCategoriesService {
  constructor() {}

  private readonly _mealCategories: MealCategoriesT[] = MEALCATEGORIES_JSON as MealCategoriesT[];
  private _selectedMealCategory = new BehaviorSubject(this._mealCategories[0]);

  setMealCategory(index: number) {
    this._selectedMealCategory.next(this._mealCategories[index]);
  }

  get selectedMealCategory(): BehaviorSubject<MealCategoriesT> {
    return this._selectedMealCategory;
  }

  get mealCategories(): MealCategoriesT[] {
    return this._mealCategories;
  }
}
