import React, { useState } from "react";
import { v4 as uuidv4} from "uuid";


const ToDoApp = () => {
  // list of to-do items
  const [todos, setTodos] = useState([]);
  // input text for new to-do items
  const[todoText, setTodoText] = useState('');


  const addTodo = () =>{
    if(todoText.trim() === ''){
        return 
    }

    // Add a new to-do item with a unique id, text from the input, and a completed status of false
    setTodos([...todos, {id: uuidv4(), text: todoText, completed: false}]);
    setTodoText('');
  }
  return (
    <div>
      <h1>To Do App</h1>
      <div>
        <input type="text" value={todoText} onChange = {(e) => setTodoText(e.target.value)} placeholder="Add a new task" />
        <button onClick={addTodo}>Add</button>

      </div>

       {/* Display the list of to-do items */}
       <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
