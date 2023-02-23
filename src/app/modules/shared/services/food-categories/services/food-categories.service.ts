import { Injectable } from '@angular/core';
import { CATEGORIES } from '../models/food-categories';

@Injectable({
  providedIn: 'root',
})
export class FoodCategoriesService {
  constructor() {}

  foodCategories = CATEGORIES;
}
