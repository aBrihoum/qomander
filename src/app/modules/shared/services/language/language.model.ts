enum LangugesE {
  FR = 'Français',
  EN = 'English',
  DZ = 'Arabic',
}

type LanguagesT = {
  code: keyof typeof LangugesE;
  name: LangugesE;
  picture: string;
  id: number;
};

export const languages: LanguagesT[] = [
  {
    code: 'EN',
    name: LangugesE.EN,
    picture: '/assets/images/lang/EN.png',
    id: 0,
  },
  {
    code: 'FR',
    name: LangugesE.FR,
    picture: '/assets/images/lang/FR.png',
    id: 1,
  },
  {
    code: 'DZ',
    name: LangugesE.DZ,
    picture: '/assets/images/lang/DZ.png',
    id: 2,
  },
];
