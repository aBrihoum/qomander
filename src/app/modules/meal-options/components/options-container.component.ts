import { MealListT } from 'src/app/modules/shared/services/meal-list/meal-list.model';
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

  readonly selectedMeal: MealListT = this.MealOptionsService.returnSelectedMeal();
  selectedOptions: MealOptionsT[] = this.MealOptionsService.returnSelectedMealOptions();
  optionsTotalPrice: number = this.MealOptionsService.returnSelectedMealOptionsTotalPrice();
  selectedMealQuantity = this.MealOptionsService.returnSelectedMealQuantity();

  refreshVars() {
    this.selectedOptions = this.MealOptionsService.returnSelectedMealOptions();
    this.optionsTotalPrice = this.MealOptionsService.returnSelectedMealOptionsTotalPrice();
  }

  changeSelectedMealQuantity(op: '+' | '-') {
    this.selectedMealQuantity = this.MealOptionsService.updatSselectedMealQuantity(op);
  }
}
