import React, { memo } from "react";

function TodoItem({ id, text, completed, onDelete, onToggle }) {
  console.log(`Rendering TodoItem: ${text}`);
  return (
    <li style={{ textDecoration: completed ? "line-through" : "none" }}>
      <span onClick={ () => onToggle(id) } style={{ cursor: "pointer" }}>
        {text}
      </span>
      <button onClick={ () => onDelete(id) } style={{ marginLeft: "1rem" }}>
        X
      </button>
    </li>
  );
}

export default memo(TodoItem);
