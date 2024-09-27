import './App.css'
import React, {useState} from 'react';
import ingredientData from './TS/ingredients.ts';
import Burger from './components/Burger.tsx'

const App: React.FC = () => {
    const [ingredients, setIngredients] = useState(
        ingredientData.map(ingredient => ({...ingredient, count:0}))
    );

    const addIngredient = (name: string) => {
        setIngredients(prevIngredients =>
            prevIngredients.map(ingredient =>
                ingredient.name === name
                    ? {...ingredient, count:ingredient.count + 1}
                    : ingredient
            )
        );
    };

    const removeIngredient = (name: string) => {
        setIngredients(prevIngredients =>
            prevIngredients.map(ingredient =>
                ingredient.name === name && ingredient.count > 0 ?
                    {...ingredient, count:ingredient.count - 1}
                    : ingredient)
        );
    };

    const totalPrice = ingredients.reduce((sum, ingredient) => sum + ingredient.price * ingredient.count, 30);

    return (
        <div className='App'>
            <h1>Твой идеальный бургер</h1>
            <div className='ingredients-list'>
                {ingredients.map(item => (
                    <div key={item.name} style={{marginBottom: '10px'}}>
                        <img src={item.image} alt={item.name} style={{width: '50px', height: '50px'}}/>
                        <p>
                            {item.name} x {item.count}
                        </p>
                        <button type={'button'} onClick={() => addIngredient(item.name)}>Добавить</button>
                        <button className='dl-btn' type={'button'} onClick={ () => removeIngredient(item.name)} disabled={item.count === 0}>Удалить</button>
                    </div>
                ))}
            </div>
            <Burger ingredients={ingredients} />

            <div style={{marginTop: '20px'}}>
                <h2>Общая стоимость: {totalPrice} сом</h2>
            </div>
        </div>
    );
};

export default App