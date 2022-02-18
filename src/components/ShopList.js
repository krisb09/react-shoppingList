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
        <li className="list-item" key={todo.id}></li>
      ))}
    </div>
  );
};

export default ItemList;
