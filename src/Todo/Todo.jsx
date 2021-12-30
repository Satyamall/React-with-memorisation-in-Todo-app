import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem, { MemoisedTodoItem } from "./TodoItem";
import { v4 as uuid } from "uuid";

function Todo() {
  const [data, setData] = useState(() => {
    return new Array(5).fill(0).map((_, i) => ({
      id: i,
      title: `${i}th element`,
      status: false
    }));
  });
  const handleAdd = (title) => {
    setData([
      ...data,
      {
        id: uuid(),
        title: title,
        status: false
      }
    ]);
  };

  const handleToggle = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };
  console.log(data);
  return (
    <div>
      <TodoInput onAdd={handleAdd} />
      {data?.map((item) => (
        <MemoisedTodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          status={item.status}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}

export default Todo;
