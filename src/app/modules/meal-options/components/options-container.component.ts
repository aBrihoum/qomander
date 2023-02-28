import { MealOptionsService } from './../../shared/services/meal-options/meal-options.service';
import { Component } from '@angular/core';
import { MealOptionsT } from '../../shared/services/meal-options/meal-options.model';

@Component({
  selector: 'app-meal-options',
  templateUrl: './options-container.component.html',
  styleUrls: ['./options-container.component.scss'],
})
export class MealOptionsComponent {
  constructor(private MealOptionsService: MealOptionsService) {}

  // meatOptions: MealOptionsT[] = this.MealOptionsService.returnMeatOptions();
  // sauceOptions: MealOptionsT[] = this.MealOptionsService.returnSauceOptions();
  // garnishOptions: MealOptionsT[] = this.MealOptionsService.returnGarnishOptions();
  selectedOptions: MealOptionsT[] = [];
  totalPrice = 0;
  updateSelectedOptions(options: MealOptionsT[]) {
    this.selectedOptions = [...options];
    this.totalPrice = 0;
    this.selectedOptions.forEach((el) => (this.totalPrice += el.price));
    console.log(this.selectedOptions);
  }
}
