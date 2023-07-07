import { Component } from '@angular/core';
import { MealCategoriesT } from 'src/app/modules/shared/services/meal-categories/meal-categories.model';
import { MealCategoriesService } from 'src/app/modules/shared/services/meal-categories/meal-categories.service';

@Component({
  selector: 'app-meal-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class MealCategoriesComponent {
  constructor(private MealCategoriesService: MealCategoriesService) {}

  mealCategories: MealCategoriesT[] = this.MealCategoriesService.mealCategories;
  selectedMealCategory = this.MealCategoriesService.selectedMealCategory;

  setMealCategory(index: number) {
    this.MealCategoriesService.setMealCategory(index);
  }
}
