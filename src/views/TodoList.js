import React, { createContext, useState } from "react";
import Todos from "../components/todos/Todos";
import TodosForm from "../components/todos/TodosForm";
import TasksContext from "../context/TasksContext";
import { act } from "react-dom/test-utils";

// const InitialData = [
//   { id: 3, name: "Task 1", done: false },
//   { id: 2, name: "Task 1", done: true },
//   { id: 1, name: "Task 1", done: false },
//   { id: 0, name: "Task 1", done: true },
// ];

const TodoList = () => {
  const InitialData = localStorage.getItem("Tasks")
    ? JSON.parse(localStorage.getItem("Tasks"))
    : [];

  const [todolist, setTodolist] = useState(InitialData);
  const [mode, setMode] = useState("add");
  const [activeTask, setactiveTask] = useState({});
  var currentTasks = [...todolist];

  const setToLocal = () => {
    localStorage.setItem("Tasks", JSON.stringify(todolist));
  };

  const ToggleStatus = (id) => {
    setTodolist((InitialData) => {
      let newData = InitialData.map((element) => {
        if (id === element.id) {
          return { ...element, done: !element.done };
        }
        return element;
      });
      return newData;
    });
  };

  const DeleteTask = (id) => {
    setTodolist((InitialData) => {
      let newData = InitialData.filter((item) => item.id !== id);
      return newData;
    });
  };

  const AddTask = (text) => {
    if (mode !== "edit") {
      const newTask = { id: todolist.length, name: text, done: false };
      setTodolist((data) => {
        return [newTask, ...data];
      });
    } else if (mode === "edit") {
      const tempTasks = todolist.map((element) => {
        if (element.id === activeTask.id) {
          element.name = text;
        }
        return element;
      });
      console.log(tempTasks);
      setTodolist(tempTasks);
      setMode("add");
    }
  };

  const FilterDone = () => {
    if (mode === "filter") {
      setMode("add");
    }
    if (mode === "add") {
      setMode("filter");
    } else {
      setMode("add");
    }
  };

  const editMode = (task) => {
    setMode("edit");
    setactiveTask(task);
  };

  if (mode === "filter") {
    currentTasks = todolist.filter((item) => item.done == false);
  }

  if (mode === "edit" && activeTask) {
    currentTasks = todolist.filter((item) => item == activeTask);
  }
  setToLocal();
  return (
    <TasksContext.Provider value={currentTasks}>
      <main>
        <div className="container">
          <div className="todos">
            <TodosForm
              AddTask={AddTask}
              FilterDone={FilterDone}
              activeTask={activeTask}
              mode={mode}
            />
            <Todos
              todos={currentTasks}
              ToggleStatus={ToggleStatus}
              DeleteTask={DeleteTask}
              mode={mode}
              editMode={editMode}
            />
          </div>
        </div>
      </main>
    </TasksContext.Provider>
  );
};

export default TodoList;
