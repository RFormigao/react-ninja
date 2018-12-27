"use strict";

import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "reducers/todos/action-creators";
import * as filterActions from "reducers/visibility-filter/actions";

const TodosList = ({ todos, activeFilter, handleToggleTodo }) => (
  <ul>
    {getVisibileTodos(todos, activeFilter).map(todo => (
      <li
        key={todo.id}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "green" : "black"
        }}
        onClick={handleToggleTodo(todo.id)}
      >
        {todo.text}
      </li>
    ))}
  </ul>
);

const getVisibileTodos = (todos, activeFilter) => {
  const filterItems = {
    [filterActions.SHOW_ALL]: todos,
    [filterActions.SHOW_COMPLETED]: todos.filter(todo => todo.completed),
    [filterActions.SHOW_ACTIVE]: todos.filter(todo => !todo.completed)
  };

  return filterItems[activeFilter];
};

const mapStateToProps = state => ({
  todos: state.todos,
  activeFilter: state.visibilityFilter
});

const mapDispatchToProps = dispatch => ({
  handleToggleTodo: id => () => {
    dispatch(toggleTodo(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList);
