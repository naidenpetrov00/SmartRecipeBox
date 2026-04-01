import { RecipeModel } from './models';

export const MOCK_RECIPES: RecipeModel[] = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish.',
    ingredients: [
      { name: 'Spaghetti', quantity: 200, unit: 'g' },
      { name: 'Guanciale', quantity: 100, unit: 'g' },
      { name: 'Egg Yolks', quantity: 4, unit: 'each' },
      { name: 'Pecorino Romano Cheese', quantity: 50, unit: 'g' },
      { name: 'Black Pepper', quantity: 1, unit: 'tsp' },
    ],
    imgUrl: 'https://miro.medium.com/v2/resize:fit:1032/1*3pNsGsnR309Wpjb0PA99DQ.png',
  },
  {
    id: 2,
    name: 'Caprese Salad',
    description: 'A simple and refreshing Italian salad.',
    ingredients: [
      { name: 'Tomatoes', quantity: 4, unit: 'each' },
      { name: 'Fresh Mozzarella', quantity: 200, unit: 'g' },
      { name: 'Fresh Basil', quantity: 1, unit: 'bunch' },
      { name: 'Extra Virgin Olive Oil', quantity: 2, unit: 'tbsp' },
    ],
    imgUrl: 'pic_trulli.jpg',
  },
];
