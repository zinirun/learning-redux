import React, { useState } from "react";

const TodoItem = React.memo(function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      style={{
        textDecoration: todo.done === true ? "line-through" : "none",
      }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </li>
  );
});

const TodoList = React.memo(function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
});

export default React.memo(function Todos({
  todos,
  onCreate,
  onToggle,
  onDelete,
}) {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };
  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input value={text} onChange={onChange} />
          <button>등록</button>
        </form>
      </div>
      <div>
        <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
      </div>
    </>
  );
});
