import { MealOptionsService } from './../../../shared/services/meal-options/meal-options.service';
import { Component } from '@angular/core';
import { MealListT } from 'src/app/modules/shared/services/meal-list/meal-list.model';
import { MealListService } from '../../../shared/services/meal-list/meal-list.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss'],
})
export class MealListComponent {
  constructor(
    private MealListService: MealListService,
    private MealOptionsService: MealOptionsService
  ) {}

  mealList: MealListT[] = this.MealListService.mealList;

  refreshMealList() {
    this.mealList = this.MealListService.mealList;
  }

  selectMeal(meal: MealListT) {
    this.MealOptionsService.updateSelectedMeal(meal);
  }
}
