import React, { useCallback } from "react";
import { connect } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleTodo, deleteTodo } from "../modules/todos";

function TodosContainer({ todos, addTodo, toggleTodo, deleteTodo }) {
  const onCreate = useCallback((text) => addTodo(text), [addTodo]);
  const onToggle = useCallback((id) => toggleTodo(id), [toggleTodo]);
  const onDelete = useCallback((id) => deleteTodo(id), [deleteTodo]);
  return (
    <Todos
      todos={todos}
      onCreate={onCreate}
      onToggle={onToggle}
      onDelete={onDelete}
    />
  );
}

// 꼭 객체형태로 만들어야함
const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
