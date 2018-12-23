"use strict";

import React from "react";

const Counter = ({ counter, decrement, increment, removeCounter }) => (
  <div>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
    <button onClick={removeCounter}>&times;</button>
  </div>
);

export default Counter;
