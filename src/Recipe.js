import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
    return(
        <div className="recipe">
            <h1>{title}</h1>
            <ol>
                Ingredients:
                {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>  
                ))}
            </ol>
            <br />
            <p>Calories: {calories}</p>
            <img src={image} alt={title} />
        </div>
    );
}

export default Recipe;