import { Component, Output, EventEmitter } from '@angular/core';
import { MealCategoriesT } from 'src/app/modules/shared/services/meal-categories/meal-categories.model';
import { MealCategoriesService } from 'src/app/modules/shared/services/meal-categories/meal-categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  constructor(private MealCategories$: MealCategoriesService) {}

  // ~~ ~~ ~~
  mealCategories: MealCategoriesT[] = this.MealCategories$.mealCategories;
  selectedMealCategory: MealCategoriesT = this.MealCategories$.selectedMealCategory;
  @Output() categoryChangedEvent = new EventEmitter<boolean>();
  // ~~ ~~ ~~

  changeMealCategory(index: number) {
    this.MealCategories$.changeMealCategory(index);
    this.refresh();
  }

  refresh() {
    this.selectedMealCategory = this.MealCategories$.selectedMealCategory;
    this.categoryChangedEvent.emit(true);
  }
}
