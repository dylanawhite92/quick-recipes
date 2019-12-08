import React, { useEffect, useState } from 'react';
import Recipe from "./Recipe";
import './App.css';

const App = () => {
  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;

  // State
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  // Query API for chicken recipes
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  // Handle on change event in search bar
  const updateSearch = event => {
    setSearch(event.target.value);
    console.log(search);
  }

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button  className="search-button" type="submit">
          Search
        </button>
      </form>

      {recipes.map(recipe => (
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
