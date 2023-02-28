import { Injectable } from '@angular/core';
import MEAT_JSON from '../../../../../assets/db/options/meat.json';
import SAUCE_JSON from '../../../../../assets/db/options/sauce.json';
import GARNISH_JSON from '../../../../../assets/db/options/garnish.json';
import { MealOptionsT } from './meal-options.model';
import { MealListT } from '../meal-list/meal-list.model';

@Injectable({
  providedIn: 'root',
})
export class MealOptionsService {
  constructor() {}

  private selectedMeal: MealListT = {} as MealListT;
  private selectedMealOptions: MealOptionsT[] = [];
  private selectedMealOptionsTotalPrice = 0;
  private selectedMealQuantity: number = 1;

  // ~~ UPDATES ~~ //

  updateSelectedMeal(meal: MealListT) {
    this.selectedMeal = { ...meal };
  }

  updateSelectedMealOptions(selectedOptions: MealOptionsT[]) {
    this.selectedMealOptions = [...this.selectedMealOptions, ...selectedOptions];
  }

  updatSselectedMealQuantity(op: '+' | '-'): number {
    if (op === '+') {
      ++this.selectedMealQuantity;
    } else {
      if (this.selectedMealQuantity > 1) {
        --this.selectedMealQuantity;
      }
    }
    return this.selectedMealQuantity;
  }

  // ~~ RETURNS ~~ //

  returnSelectedMeal(): MealListT {
    return this.selectedMeal;
  }

  returnSelectedMealQuantity(): number {
    return this.selectedMealQuantity;
  }

  returnSelectedMealOptionsTotalPrice(): number {
    this.calculateSelectedMealOptionsTotalPrice();
    return this.selectedMealOptionsTotalPrice;
  }

  returnSelectedMealOptions() {
    return this.selectedMealOptions;
  }

  returnMeatOptions() {
    return MEAT_JSON as MealOptionsT[];
  }

  returnSauceOptions() {
    return SAUCE_JSON as MealOptionsT[];
  }

  returnGarnishOptions() {
    return GARNISH_JSON as MealOptionsT[];
  }

  // ~~ PRIVATE ~~ //

  private calculateSelectedMealOptionsTotalPrice() {
    this.selectedMealOptionsTotalPrice = 0;
    this.selectedMealOptions.forEach((el) => (this.selectedMealOptionsTotalPrice += el.price));
  }
}
