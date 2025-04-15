import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodos, index, handleEditTodos } = props;
  return (
    <li className="todoItem">
      <div className="actionsContainer">
        {children}
        <button onClick={() => handleEditTodos(index)}>
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTodos(index)}>
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
