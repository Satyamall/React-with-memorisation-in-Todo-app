import React, { useMemo } from "react";

const delay = (time) => {
  const start = Date.now();
  while (Date.now() - start < time) {
    continue;
  }
  return start;
};

const areEqual = (prevProps, nextProps) => {
  if (prevProps.status === nextProps.status) {
    return true;
  }
  return false;
};

const TodoItem = ({ title, id, status, handleDelete, onToggle }) => {
  /** Expensive calculation */
  const time = delay(200);

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h3>{title}</h3>
      <div>{status ? "DONE" : "NOT DONE"}</div>
      <div>{time}</div>
      <button onClick={() => onToggle(id)}>TOGGLE</button>
    </div>
  );
};

export const MemoisedTodoItem = React.memo(TodoItem, areEqual);

export default TodoItem;
