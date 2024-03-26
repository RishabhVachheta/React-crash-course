import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";  

let nextid = 3;
const intitialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

function TaskApp() {
  const [todos, setTodos] = useState(intitialTodos);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextid++,
        title: title,
        done: false,
      },
    ]);
  }

  function handlechangeTodo(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTodo(todoid) {
    setTodos(todos.filter((t) => t.id !== todoid));
  }
  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handlechangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default TaskApp;
