import React, { useEffect, useState } from 'react';
import Recipe from "./Recipe";
import './App.css';

const App = () => {
  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;

  // Default State Values
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken")

  // Query API for chicken recipes
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  // Handle on change event in search bar
  const updateSearch = event => {
    setSearch(event.target.value);
    console.log(search);
  }

  // Set the search query on submit
  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  }

  // Add query as dependency so it will only run when getSearch is fired from onSubmit
  useEffect(() => {
    getRecipes();
  }, [query]);

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button  className="search-button" type="submit">
          Search
        </button>
      </form>

      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
