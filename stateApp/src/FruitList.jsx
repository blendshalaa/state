/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/FruitList.js
import React from 'react';

const FruitList = ({ fruits }) => {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
};

export default FruitList;
