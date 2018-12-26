import reducerTodos from "./todos";
import reduceVisilibityFilter from "./visibility-filter";

const rootReducer = (state = {}, action) => {
  return {
    todos: reducerTodos(state.todos, action),
    visibilityFilter: reduceVisilibityFilter(state.visibilityFilter, action)
  };
};

export default rootReducer;
