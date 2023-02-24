import { CategoriesE } from '../meal-categories/meal-categories.model';

type MealListT = {
  name: string;
  category: keyof typeof CategoriesE;
  picture: string;
  price: number;
  suitableExtras: string[];
};

export const MEALLIST: MealListT[] = [
  {
    name: 'Tacos double',
    category: 'tacos',
    picture: '/assets/images/meals/tacos/tacos-double.webp',
    price: 400,
    suitableExtras: [],
  },
  {
    name: 'Tacos special',
    category: 'tacos',
    picture: '/assets/images/meals/tacos/tacos-supreme.webp',
    price: 250,
    suitableExtras: [],
  },
  {
    name: 'Tacos simple',
    category: 'tacos',
    picture: '/assets/images/meals/tacos/tacos-simple.webp',
    price: 200,
    suitableExtras: [],
  },
  {
    name: 'Tacos maxi',
    category: 'tacos',
    picture: '/assets/images/meals/tacos/tacos-maxi.webp',
    price: 300,
    suitableExtras: [],
  },
  {
    name: 'Tacos maxi',
    category: 'tacos',
    picture: '/assets/images/meals/tacos/tacos-maxi.webp',
    price: 300,
    suitableExtras: [],
  },
  // {
  //   name: 'Tacos maxi',
  //   category: 'tacos',
  //   picture: '/assets/images/meals/tacos/tacos-maxi.webp',
  //   price: 300,
  //   suitableExtras: [],
  // },
  // {
  //   name: 'Tacos maxi',
  //   category: 'tacos',
  //   picture: '/assets/images/meals/tacos/tacos-maxi.webp',
  //   price: 300,
  //   suitableExtras: [],
  // },
  // {
  //   name: 'Tacos maxi',
  //   category: 'tacos',
  //   picture: '/assets/images/meals/tacos/tacos-maxi.webp',
  //   price: 300,
  //   suitableExtras: [],
  // },
  // {
  //   name: 'Tacos maxi',
  //   category: 'tacos',
  //   picture: '/assets/images/meals/tacos/tacos-maxi.webp',
  //   price: 300,
  //   suitableExtras: [],
  // },
  // {
  //   name: 'Tacos maxi',
  //   category: 'tacos',
  //   picture: '/assets/images/meals/tacos/tacos-maxi.webp',
  //   price: 300,
  //   suitableExtras: [],
  // },
  // {
  //   name: 'Tacos maxi',
  //   category: 'tacos',
  //   picture: '/assets/images/meals/tacos/tacos-maxi.webp',
  //   price: 300,
  //   suitableExtras: [],
  // },
  // {
  //   name: 'Tacos maxi',
  //   category: 'tacos',
  //   picture: '/assets/images/meals/tacos/tacos-maxi.webp',
  //   price: 300,
  //   suitableExtras: [],
  // },
  // {
  //   name: 'Tacos maxi',
  //   category: 'tacos',
  //   picture: '/assets/images/meals/tacos/tacos-maxi.webp',
  //   price: 300,
  //   suitableExtras: [],
  // },
  // {
  //   name: 'Tacos maxi',
  //   category: 'tacos',
  //   picture: '/assets/images/meals/tacos/tacos-maxi.webp',
  //   price: 300,
  //   suitableExtras: [],
  // },
  // {
  //   name: 'Tacos maxi',
  //   category: 'tacos',
  //   picture: '/assets/images/meals/tacos/tacos-maxi.webp',
  //   price: 300,
  //   suitableExtras: [],
  // },
  // {
  //   name: 'Tacos maxi',
  //   category: 'tacos',
  //   picture: '/assets/images/meals/tacos/tacos-maxi.webp',
  //   price: 300,
  //   suitableExtras: [],
  // },
  // {
  //   name: 'Tacos maxi',
  //   category: 'tacos',
  //   picture: '/assets/images/meals/tacos/tacos-maxi.webp',
  //   price: 300,
  //   suitableExtras: [],
  // },
  // {
  //   name: 'Tacos maxi',
  //   category: 'tacos',
  //   picture: '/assets/images/meals/tacos/tacos-maxi.webp',
  //   price: 300,
  //   suitableExtras: [],
  // },
  // {
  //   name: 'Tacos maxi',
  //   category: 'tacos',
  //   picture: '/assets/images/meals/tacos/tacos-maxi.webp',
  //   price: 300,
  //   suitableExtras: [],
  // },
  // {
  //   name: 'Tacos maxi',
  //   category: 'tacos',
  //   picture: '/assets/images/meals/tacos/tacos-maxi.webp',
  //   price: 300,
  //   suitableExtras: [],
  // },
  // {
  //   name: 'Tacos maxi',
  //   category: 'tacos',
  //   picture: '/assets/images/meals/tacos/tacos-maxi.webp',
  //   price: 300,
  //   suitableExtras: [],
  // },
  // {
  //   name: 'Tacos maxi',
  //   category: 'tacos',
  //   picture: '/assets/images/meals/tacos/tacos-maxi.webp',
  //   price: 300,
  //   suitableExtras: [],
  // },
  // {
  //   name: 'Tacos maxi',
  //   category: 'tacos',
  //   picture: '/assets/images/meals/tacos/tacos-maxi.webp',
  //   price: 300,
  //   suitableExtras: [],
  // },
];
