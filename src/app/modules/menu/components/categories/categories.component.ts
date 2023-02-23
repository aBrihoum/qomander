import { FoodCategoriesService } from './../../../shared/services/food-categories/services/food-categories.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  constructor(public FoodCategoriesS: FoodCategoriesService) {}
}
