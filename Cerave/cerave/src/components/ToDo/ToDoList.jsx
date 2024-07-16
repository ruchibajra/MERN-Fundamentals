// src/components/TodoList.js
import React from 'react';
import ToDoItem from './ToDoItem';

// TodoList component takes three props: todos (array of to-do items), toggleComplete (function to mark item as completed), and removeTodo (function to delete item)
const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <div>
      {/* Map over the todos array and render a TodoItem component for each item */}
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
