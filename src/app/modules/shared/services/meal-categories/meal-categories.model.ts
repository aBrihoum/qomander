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

export const CATEGORIES: MealCategoriesT[] = [
  {
    name: CategoriesE.tacos,
    picture: '/assets/images/categories/tacos.webp',
    key: 'tacos',
  },
  {
    name: CategoriesE.crepes,
    picture: '/assets/images/categories/crepes.webp',
    key: 'crepes',
  },
  {
    name: CategoriesE.burgers,
    picture: '/assets/images/categories/burgers.webp',
    key: 'burgers',
  },
  {
    name: CategoriesE.drinks,
    picture: '/assets/images/categories/drinks.webp',
    key: 'drinks',
  },
  {
    name: CategoriesE.dessert,
    picture: '/assets/images/categories/dessert.webp',
    key: 'dessert',
  },
  {
    name: CategoriesE.chicken,
    picture: '/assets/images/categories/chicken.webp',
    key: 'chicken',
  },
  {
    name: CategoriesE.chicken,
    picture: '/assets/images/categories/chicken.webp',
    key: 'chicken',
  },
  {
    name: CategoriesE.chicken,
    picture: '/assets/images/categories/chicken.webp',
    key: 'chicken',
  },
  {
    name: CategoriesE.chicken,
    picture: '/assets/images/categories/chicken.webp',
    key: 'chicken',
  },
];
