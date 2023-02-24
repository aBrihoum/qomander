import { Injectable } from '@angular/core';
import { MEALLIST } from './meal-list.model';

@Injectable({
  providedIn: 'root',
})
export class MealListService {
  constructor() {}
  list = MEALLIST;
}
