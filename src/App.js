import TodoList from "./views/TodoList";
import Header from "./components/todos/Header";
import TasksContext from "./context/TasksContext";
import "./assets/css/index.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
