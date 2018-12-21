"use strict";

// Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
  return state;
};

// Store
const { createStore } = Redux;
const store = createStore(counter);

// Elements HTML
const $counter = document.querySelector('[data-js="counter"]');
const $decrement = document.querySelector('[data-js="decrement"]');
const $increment = document.querySelector('[data-js="increment"]');

// Functions decrement and increment
const decrement = () => store.dispatch({ type: "DECREMENT" });
const increment = () => store.dispatch({ type: "INCREMENT" });

$decrement.addEventListener("click", decrement, false);
$increment.addEventListener("click", increment, false);

// Result of actions
store.subscribe(() => ($counter.textContent = store.getState()));
