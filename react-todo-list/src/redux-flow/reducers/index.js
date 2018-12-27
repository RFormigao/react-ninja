import { combineReducers } from "redux";
import reducerTodos from "./todos";
import reduceVisilibityFilter from "./visibility-filter";

export default combineReducers({
  todos: reducerTodos,
  visibilityFilter: reduceVisilibityFilter
});
