import { Injectable } from '@angular/core';
import MEAT_JSON from '../../../../../assets/db/options/meat.json';
import SAUCE_JSON from '../../../../../assets/db/options/sauce.json';
import GARNISH_JSON from '../../../../../assets/db/options/garnish.json';
import { MealOptionsT, StepsT } from './meal-options.model';
import { MealListT } from '../meal-list/meal-list.model';

@Injectable({
  providedIn: 'root',
})
export class MealOptionsService {
  constructor() {}

  private _selectedMeal: MealListT = {} as MealListT;
  private _selectedMealOptions: MealOptionsT[] = [];
  private _selectedMealOptionsTotalPrice = 0;
  private _selectedMealQuantity: number = 1;

  private _steps: StepsT[] = [
    {
      name: 'meat',
      heading: 'Select the meat type:',
      canSelect: 1,
      options: this.meatOptions,
      selectedOptions: [] as MealOptionsT[],
    },
    {
      name: 'sauce',
      heading: 'Select the sauce type:',
      canSelect: 2,
      options: this.sauceOptions,
      selectedOptions: [] as MealOptionsT[],
    },
    {
      name: 'garnish',
      heading: 'Select additional garnish:',
      canSelect: 0,
      options: this.garnishOptions,
      selectedOptions: [] as MealOptionsT[],
    },
  ];
  // ~~ UPDATES ~~ //

  setSelectedMeal(meal: MealListT) {
    this._selectedMeal = meal;
  }

  setSelectedMealOptions(selectedOptions: MealOptionsT[], currentStepIndex: number) {
    this._steps[currentStepIndex].selectedOptions = selectedOptions;
    this._selectedMealOptions = this._steps.flatMap((el) => el.selectedOptions);
    //* THANKGOD for `flatMap`
  }

  setSelectedMealQuantity(op: '+' | '-'): number {
    if (op === '+') {
      ++this._selectedMealQuantity;
    } else {
      if (this._selectedMealQuantity > 1) {
        --this._selectedMealQuantity;
      }
    }
    return this._selectedMealQuantity;
  }

  // ~~ RETURNS ~~ //

  get steps(): StepsT[] {
    return this._steps;
  }

  get selectedMeal(): MealListT {
    return this._selectedMeal;
  }

  get selectedMealQuantity(): number {
    return this._selectedMealQuantity;
  }

  get selectedMealOptionsTotalPrice(): number {
    this.calculateSelectedMealOptionsTotalPrice();
    return this._selectedMealOptionsTotalPrice;
  }

  get selectedMealOptions(): MealOptionsT[] {
    return this._selectedMealOptions;
  }

  get meatOptions(): MealOptionsT[] {
    return MEAT_JSON as MealOptionsT[];
  }

  get sauceOptions(): MealOptionsT[] {
    return SAUCE_JSON as MealOptionsT[];
  }

  get garnishOptions(): MealOptionsT[] {
    return GARNISH_JSON as MealOptionsT[];
  }

  // ~~ PRIVATE ~~ //

  private calculateSelectedMealOptionsTotalPrice() {
    this._selectedMealOptionsTotalPrice = 0;
    this._selectedMealOptions.forEach((el) => (this._selectedMealOptionsTotalPrice += el.price));
  }
}
