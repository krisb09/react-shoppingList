//displays to do list items on screen
import React from "react";
import '../styles/ShopList.css'

const ItemList = ({ todos, setTodos, setEditTodo }) => {
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {/* map thru todos list item and display list item on the screen*/}
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button className="edit" onClick={() => handleEdit(todo)}>
              Edit
            </button>
            <button className="delete" onClick={() => handleDelete(todo)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default ItemList;
