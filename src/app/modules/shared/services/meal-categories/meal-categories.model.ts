export enum CategoriesE {
  tacos = 'Tacos',
  crepes = 'crepes',
  burgers = 'burgers',
  drinks = 'drinks',
  dessert = 'dessert',
  chicken = 'chicken',
}

export type MealCategoriesT = {
  name: CategoriesE;
  picture: string;
  key: keyof typeof CategoriesE;
};
