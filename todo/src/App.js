import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input) {
      const newTodo = { text: input, isCompleted: false };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };

  const completeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editTodo = (index, newText) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = newText;
    setTodos(updatedTodos);
  };

  const moveUp = (index) => {
    if (index > 0) {
      const updatedTodos = [...todos];
      [updatedTodos[index], updatedTodos[index - 1]] = [updatedTodos[index - 1], updatedTodos[index]];
      setTodos(updatedTodos);
    }
  };

  const moveDown = (index) => {
    if (index < todos.length - 1) {
      const updatedTodos = [...todos];
      [updatedTodos[index], updatedTodos[index + 1]] = [updatedTodos[index + 1], updatedTodos[index]];
      setTodos(updatedTodos);
    }
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>
      
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={addTodo} className='add'>Add</button>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={() => completeTodo(index)}
            deleteTodo={() => deleteTodo(index)}
            editTodo={editTodo}
            moveUp={() => moveUp(index)}
            moveDown={() => moveDown(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;