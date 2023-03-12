import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

const TaskItem = ({ todo, active }) => {
  const [checked, setChecked] = useState(todo.done);

  return (
    <li className="flex gap-2 items-center my-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
        }}
      />
      <span>{todo.text}</span>
      {active === "completed" && (
        <span className="justify-self-end">
          <MdDeleteOutline />
        </span>
      )}
    </li>
  );
};

export default TaskItem;
