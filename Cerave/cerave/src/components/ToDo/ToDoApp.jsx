import React, { useState } from 'react';
import ToDoList from './ToDoList';
import { v4 as uuidv4 } from 'uuid';

// TodoApp component manages the state and logic of the to-do application
const ToDoApp = () => {
  // State to manage the list of to-do items
  const [todos, setTodos] = useState([]);
  // State to manage the input text for new to-do items
  const [todoText, setTodoText] = useState('');

  // Function to add a new to-do item
  const addTodo = () => {
    if (todoText.trim() === '') return; // Prevent adding empty to-do items
    // Add a new to-do item with a unique id, text from the input, and a completed status of false
    setTodos([...todos, { id: uuidv4(), text: todoText, completed: false }]);
    setTodoText(''); // Clear the input field
  };

  // Function to toggle the completed status of a to-do item
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Function to remove a to-do item
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-4">To-Do App</h1>
      <div className="flex mb-4">
        {/* Input field for new to-do items */}
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          placeholder="Add a new task"
        />
        {/* Button to add a new to-do item */}
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded-r">
          Add
        </button>
      </div>
      {/* Render the TodoList component and pass the necessary props */}
      <ToDoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  );
};

export default ToDoApp;
