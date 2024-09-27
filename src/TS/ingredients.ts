export type Ingredient ={
    name: string;
    price: number;
    image: string;
};

import meatImg from '../assets/images/meat.png';
import cheeseImg from '../assets/images/cheese.png';
import saladImg from '../assets/images/salad.png';
import baconImg from '../assets/images/bacon.png';

const ingredientData: Ingredient[] = [
    {name: 'Meat', price: 80, image: meatImg},
    {name: 'Bacon', price: 60, image: baconImg},
    {name: 'Cheese', price: 50, image: cheeseImg},
    {name: 'Salad', price: 10, image: saladImg},
];

export default ingredientData;