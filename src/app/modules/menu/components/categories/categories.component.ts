import { Component, Output, EventEmitter } from '@angular/core';
import { MealCategoriesT } from 'src/app/modules/shared/services/meal-categories/meal-categories.model';
import { MealCategoriesService } from 'src/app/modules/shared/services/meal-categories/meal-categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  constructor(private MealCategoriesService: MealCategoriesService) {}

  mealCategories: MealCategoriesT[] = this.MealCategoriesService.returnMealCategories();
  selectedMealCategory: MealCategoriesT = this.MealCategoriesService.selectedMealCategory;
  @Output() categoryChangedEvent = new EventEmitter<boolean>();

  changeMealCategory(index: number) {
    this.MealCategoriesService.changeMealCategory(index);
    this.refresh();
  }

  refresh() {
    this.selectedMealCategory = this.MealCategoriesService.selectedMealCategory;
    this.categoryChangedEvent.emit(true);
  }
}