import { CategoriesE } from '../meal-categories/meal-categories.model';

export type MealListT = {
  name: string;
  categoryKey: keyof typeof CategoriesE;
  picture: string;
  price: number;
};
