import { Component } from '@angular/core';
import { MealCategoriesService } from 'src/app/modules/shared/services/meal-categories/meal-categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  constructor(public mealCategoriesS: MealCategoriesService) {}
}
