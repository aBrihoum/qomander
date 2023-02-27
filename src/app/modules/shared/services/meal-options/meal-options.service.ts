import { Injectable } from '@angular/core';
import MEAT_JSON from '../../../../../assets/db/options/meat.json';
import SAUCE_JSON from '../../../../../assets/db/options/sauce.json';
import GARNISH_JSON from '../../../../../assets/db/options/garnish.json';
import { MealOptionsT } from './meal-options.model';

@Injectable({
  providedIn: 'root',
})
export class MealOptionsService {
  constructor() {}

  private readonly meatOptions: MealOptionsT[] = MEAT_JSON as MealOptionsT[];
  private readonly sauceOptions: MealOptionsT[] = SAUCE_JSON as MealOptionsT[];
  private readonly garnishOptions: MealOptionsT[] = GARNISH_JSON as MealOptionsT[];

  returnMeatOptions() {
    return this.meatOptions;
  }
  returnSauceOptions() {
    return this.sauceOptions;
  }
  returnGarnishOptions() {
    return this.garnishOptions;
  }
}
