import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const APP_ID = process.env.REACT_APP_API_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;

  // State
  const [recipes, setRecipes] = useState([]);

  // Query API for chicken recipes
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button  className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
