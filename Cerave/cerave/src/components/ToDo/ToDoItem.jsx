// src/components/TodoItem.js
import React from 'react';

// TodoItem component takes three props: todo (the to-do item), toggleComplete (function to mark item as completed), and removeTodo (function to delete item)
const ToDoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className={`flex justify-between items-center p-2 my-2 bg-gray-200 rounded ${todo.completed ? 'line-through' : ''}`}>
      {/* Clicking the span will toggle the completed status of the to-do item */}
      <span onClick={() => toggleComplete(todo.id)} className="cursor-pointer">
        {todo.text}
      </span>
      {/* Clicking the button will remove the to-do item */}
      <button onClick={() => removeTodo(todo.id)} className="bg-red-500 text-white px-2 py-1 rounded">
        Delete
      </button>
    </div>
  );
};

export default ToDoItem;
