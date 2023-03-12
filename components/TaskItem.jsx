import { useState } from "react";

const TaskItem = ({ todo }) => {
  const [checked, setChecked] = useState(todo.done);

  return (
    <li className="flex gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
      />
      <span>{todo.text}</span>
    </li>
  );
};

export default TaskItem;
