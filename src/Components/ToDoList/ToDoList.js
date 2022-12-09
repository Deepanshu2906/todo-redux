import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoSelector, update } from "../../todoReducer";

import "./ToDoList.css";
const ToDoList = () => {
  const value = useSelector(todoSelector);
  const dispatch = useDispatch();
  const [todoText, setText] = useState();
  const [todoTextIndex, setIndex] = useState();

  return (
    <table className="table">
      <tr>
        <th>ToDo</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
      {value.map((i, index) => (
        <tr>
          <td>
            {todoTextIndex !== index && i}
            {todoTextIndex === index && (
              <input
                className="form-control w-25 "
                onInput={(e) => {
                  setText(e.target.value);
                }}
              />
            )}
          </td>
          <td>
            {todoTextIndex !== index && (
              <button
                className="btn btn-warning"
                onClick={() => {
                  setText(i);
                  setIndex(index);
                }}
              >
                update
              </button>
            )}
            {todoTextIndex === index && (
              <button
                className="btn btn-warning"
                onClick={() => {
                  dispatch(update({ index: index, text: todoText }));
                  setText();
                  setIndex();
                }}
              >
                Save
              </button>
            )}
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default ToDoList;
