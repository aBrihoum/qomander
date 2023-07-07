import { Router } from '@angular/router';
import { Component, Output, EventEmitter } from '@angular/core';
import { MealCategoriesT } from 'src/app/modules/shared/services/meal-categories/meal-categories.model';
import { MealCategoriesService } from 'src/app/modules/shared/services/meal-categories/meal-categories.service';

@Component({
  selector: 'app-meal-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class MealCategoriesComponent {
  constructor(private MealCategoriesService: MealCategoriesService) {}

  @Output() categoryChangedEvent = new EventEmitter<boolean>();
  mealCategories: MealCategoriesT[] = this.MealCategoriesService.mealCategories;
  selectedMealCategory: MealCategoriesT = this.MealCategoriesService.selectedMealCategory;

  changeMealCategory(index: number) {
    this.MealCategoriesService.changeMealCategory(index);
    this.refresh();
  }

  refresh() {
    this.selectedMealCategory = this.MealCategoriesService.selectedMealCategory;
    this.categoryChangedEvent.emit(true);
  }
}
