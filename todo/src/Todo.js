import React, { useState } from 'react';

const Todo = ({ todo, index, completeTodo, deleteTodo, editTodo,moveUp, moveDown}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(index, newText);
    setIsEditing(false);
  };

  return (
    <div>
         <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
      {isEditing ? (
        <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        <div>{todo.text}</div>
      )}
      
    </div>
    <div>
    <button onClick={completeTodo} className="complete-btn">
        <b>Complete</b>
      </button>
      {isEditing ? (
        <button onClick={handleEdit} className="edit-btn">
          <b>Save</b>
        </button>
      ) : (
        <button onClick={() => setIsEditing(true)} className="edit-btn">
          <b>Edit</b>
        </button>
      )}
      <button onClick={deleteTodo} className="delete-btn">
        <b>Delete</b>
      </button>
      <button onClick={moveUp} className="up-btn">
        ⬆
      </button>
      <button onClick={moveDown} className="down-btn">
        ⬇
      </button>

    </div>

    </div>
   
  );
};

export default Todo;