import React from 'react'
import style from './recipe.module.css'

function Recipe({title, calories, image, ingredients }) {
    return (
        <div className={style.recipe} >
            <h1>{title}</h1>
            <p><b>Calories: </b>{calories}</p>
            <ol>
                {ingredients.map((ingredient) => (
                    <li>{ingredient.text}</li>
                )
                )}
            </ol>
            <img className={style.image} src={image} alt="Dish_image" />
        </div>
    )
}

export default Recipe
