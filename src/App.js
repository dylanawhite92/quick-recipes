import React from 'react';
import './App.css';

const App = () => {
  const API_ID = process.env.REACT_APP_API_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;

  console.log(API_ID);
  console.log(API_KEY);

  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
