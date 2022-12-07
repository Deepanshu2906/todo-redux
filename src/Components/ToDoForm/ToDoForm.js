import React from "react";

import "./ToDoForm.css";
const ToDoForm = () => {
  return (
    <div>
      <input type="text" className="form-control" />
      <button className="btn btn-success float-end mt-3">Add</button>
    </div>
  );
};

export default ToDoForm;
