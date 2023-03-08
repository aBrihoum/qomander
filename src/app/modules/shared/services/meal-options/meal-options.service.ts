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

  private selectedMeal: MealListT = {} as MealListT;
  private selectedMealOptions: MealOptionsT[] = [];
  private selectedMealOptionsTotalPrice = 0;
  private selectedMealQuantity: number = 1;

  private steps: StepsT[] = [
    {
      name: 'meat',
      heading: 'Select the meat type:',
      canSelect: 1,
      options: this.returnMeatOptions(),
      selectedOptions: [] as MealOptionsT[],
    },
    {
      name: 'sauce',
      heading: 'Select the sauce type:',
      canSelect: 2,
      options: this.returnSauceOptions(),
      selectedOptions: [] as MealOptionsT[],
    },
    {
      name: 'garnish',
      heading: 'Select additional garnish:',
      canSelect: 0,
      options: this.returnGarnishOptions(),
      selectedOptions: [] as MealOptionsT[],
    },
  ];
  // ~~ UPDATES ~~ //

  updateSelectedMeal(meal: MealListT) {
    this.selectedMeal = { ...meal };
  }

  updateSelectedMealOptions(selectedOptions: MealOptionsT[], currentStepIndex: number) {
    this.steps[currentStepIndex].selectedOptions = selectedOptions;
    this.selectedMealOptions = this.steps.flatMap((el) => el.selectedOptions);
    //* THANKGOD for `flatMap`
  }

  updateSelectedMealQuantity(op: '+' | '-'): number {
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

  returnSteps(): StepsT[] {
    return this.steps;
  }

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

  returnSelectedMealOptions(): MealOptionsT[] {
    return this.selectedMealOptions;
  }

  returnMeatOptions(): MealOptionsT[] {
    return MEAT_JSON as MealOptionsT[];
  }

  returnSauceOptions(): MealOptionsT[] {
    return SAUCE_JSON as MealOptionsT[];
  }

  returnGarnishOptions(): MealOptionsT[] {
    return GARNISH_JSON as MealOptionsT[];
  }

  // ~~ PRIVATE ~~ //

  private calculateSelectedMealOptionsTotalPrice() {
    this.selectedMealOptionsTotalPrice = 0;
    this.selectedMealOptions.forEach((el) => (this.selectedMealOptionsTotalPrice += el.price));
  }
}
