enum LangugesE {
  tacos = 'Tacos',
  crepes = 'crepes',
  burgers = 'burgers',
  drinks = 'drinks',
  dessert = 'dessert',
  chicken = 'chicken',
}

type FoodCategoriesT = {
  name: LangugesE;
  picture: string;
  category: keyof typeof LangugesE;
};

export const CATEGORIES: FoodCategoriesT[] = [
  {
    name: LangugesE.tacos,
    picture: '/assets/images/categories/tacos.webp',
    category: 'tacos',
  },
  {
    name: LangugesE.crepes,
    picture: '/assets/images/categories/crepes.webp',
    category: 'crepes',
  },
  {
    name: LangugesE.burgers,
    picture: '/assets/images/categories/burgers.webp',
    category: 'burgers',
  },
  {
    name: LangugesE.drinks,
    picture: '/assets/images/categories/drinks.webp',
    category: 'drinks',
  },
  {
    name: LangugesE.dessert,
    picture: '/assets/images/categories/dessert.webp',
    category: 'dessert',
  },
  {
    name: LangugesE.chicken,
    picture: '/assets/images/categories/chicken.webp',
    category: 'chicken',
  },
  {
    name: LangugesE.chicken,
    picture: '/assets/images/categories/chicken.webp',
    category: 'chicken',
  },
  {
    name: LangugesE.chicken,
    picture: '/assets/images/categories/chicken.webp',
    category: 'chicken',
  },
  {
    name: LangugesE.chicken,
    picture: '/assets/images/categories/chicken.webp',
    category: 'chicken',
  },
];
