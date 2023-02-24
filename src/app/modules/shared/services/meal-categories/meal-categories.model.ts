export enum CategoriesE {
  tacos = 'Tacos',
  crepes = 'crepes',
  burgers = 'burgers',
  drinks = 'drinks',
  dessert = 'dessert',
  chicken = 'chicken',
}

type MealCategoriesT = {
  name: CategoriesE;
  picture: string;
  category: keyof typeof CategoriesE;
};

export const CATEGORIES: MealCategoriesT[] = [
  {
    name: CategoriesE.tacos,
    picture: '/assets/images/categories/tacos.webp',
    category: 'tacos',
  },
  {
    name: CategoriesE.crepes,
    picture: '/assets/images/categories/crepes.webp',
    category: 'crepes',
  },
  {
    name: CategoriesE.burgers,
    picture: '/assets/images/categories/burgers.webp',
    category: 'burgers',
  },
  {
    name: CategoriesE.drinks,
    picture: '/assets/images/categories/drinks.webp',
    category: 'drinks',
  },
  {
    name: CategoriesE.dessert,
    picture: '/assets/images/categories/dessert.webp',
    category: 'dessert',
  },
  {
    name: CategoriesE.chicken,
    picture: '/assets/images/categories/chicken.webp',
    category: 'chicken',
  },
  {
    name: CategoriesE.chicken,
    picture: '/assets/images/categories/chicken.webp',
    category: 'chicken',
  },
  {
    name: CategoriesE.chicken,
    picture: '/assets/images/categories/chicken.webp',
    category: 'chicken',
  },
  {
    name: CategoriesE.chicken,
    picture: '/assets/images/categories/chicken.webp',
    category: 'chicken',
  },
];
