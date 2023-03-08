export type MealOptionsT = {
  name: string;
  picture: string;
  price: number;
  selected?: boolean;
};

export type StepsT = {
  name: string;
  heading: string;
  canSelect: number;
  options: MealOptionsT[];
  selectedOptions: MealOptionsT[];
};
