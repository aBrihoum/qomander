import { Component } from '@angular/core';
import { MealListT } from '../../shared/services/meal-list/meal-list.model';
import { MealOptionsT } from '../../shared/services/meal-options/meal-options.model';
import { MealOptionsService } from '../../shared/services/meal-options/meal-options.service';
@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss'],
})
export class FinalComponent {
  constructor(private MealOptionsService: MealOptionsService) {}

  readonly selectedMeal: MealListT = this.MealOptionsService.returnSelectedMeal();
  selectedOptions: MealOptionsT[] = this.MealOptionsService.returnSelectedMealOptions();
  optionsTotalPrice: number = this.MealOptionsService.returnSelectedMealOptionsTotalPrice();
  selectedMealQuantity = this.MealOptionsService.returnSelectedMealQuantity();
}
