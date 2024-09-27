import React from "react";
import './Burger.css';

type Ingredient = {
    name: string;
    price: number;
    image: string;
    count: number;
};

type BurgerProps = {
    ingredients: Ingredient[];
};

const Burger: React.FC<BurgerProps> = ({ ingredients }) => {
    return(
        <div className='Burger'>
            <div className='BreadTop'>
                <div className='Seeds1'></div>
                <div className='Seeds2'></div>
            </div>

            {ingredients
                .filter(ingredient => ingredient.count > 0)
                .map((ingredient, index) =>
                    Array.from({length: ingredient.count}).map((_, i) =>(
                        <div key={index + '-' + i} className={ingredient.name}></div>
                    ))
            )}
            <div className='BreadBottom'></div>
        </div>
    );
};

export default Burger;