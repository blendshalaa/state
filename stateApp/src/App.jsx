/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import FruitList from './FruitList';

function getRandomFruit() {
  const fruits = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
    'Kiwi',
    'Lemon',
  ];
  return fruits[Math.floor(Math.random() * fruits.length)];
}

function App() {
  const [fruits, setFruits] = useState([]);

  const handleClick = () => {
    const newFruit = getRandomFruit();

    setFruits(prevFruits => [...prevFruits, newFruit]); 
  };

  return (
    <div>
      <h1>Random Fruit Generator</h1>
      <button onClick={handleClick}>Add Random Fruit</button>
      <FruitList fruits={fruits} />
    </div>
  );
}

export default App;

