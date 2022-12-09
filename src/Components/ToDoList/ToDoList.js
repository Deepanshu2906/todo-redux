import React from "react";
import { useSelector } from "react-redux";
import { todoSelector } from "../../todoReducer";

import "./ToDoList.css";
const ToDoList = () => {
  const value = useSelector(todoSelector);
  return (
    <div>
      <ul className="list">
        {value.map((i) => (
          <li> {i}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
