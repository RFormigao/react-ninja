"use strict";

import { TOGGLE_TODO, ADD_TODO } from "./actions";
import createReducer from "../create-reducer";

const todos = createReducer([], {
  [ADD_TODO]: (state, action) =>
    state.concat({
      id: action.payload.id,
      text: action.payload.text,
      completed: false
    }),

  [TOGGLE_TODO]: (state, action) =>
    state.map(todo => {
      if (todo.id !== action.payload.id) {
        return todo;
      }

      return {
        ...todo,
        completed: !todo.completed
      };
    })
});

export default todos;
