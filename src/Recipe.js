import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
    const calorieCount = Math.trunc(calories)

    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                Ingredients:
                {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>  
                ))}
            </ol>
            <br />
            <p>Calories: {calorieCount}</p>
            <img src={image} alt={title} />
        </div>
    );
}

export default Recipe;