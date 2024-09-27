import './App.css'
import React, {useState} from 'react';
import ingredientData from './TS/ingredients.ts';

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

    return (
        <div className='App'>
            <h1>Конструктор бургера</h1>
            <div className='ingredients-list'>
                {ingredients.map(item => (
                    <div key={item.name} style={{marginBottom: '10px'}}>
                        <img src={item.image} alt={item.name} style={{width: '50px', height: '50px'}}/>
                        <p>
                            {item.name} * {item.count}
                        </p>
                        <button type={"button"} onClick={() => addIngredient(item.name)}>Добавить</button>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default App
