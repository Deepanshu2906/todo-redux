import React from "react";
import "./App.css";
import ToDoForm from "./Components/ToDoForm/ToDoForm";
import ToDoList from "./Components/ToDoList/ToDoList";

function App() {
  return (
    <div className="container">
      <ToDoForm />
      <ToDoList />
    </div>
  );
}

export default App;
