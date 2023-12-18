import React from "react";
import Todo from "./Todo";
const Todos = (props) => {
  return (
    <div className="todos-list">
      {props.todos.map((element) => {
        return (
          <Todo
            key={element.id}
            task={element}
            ToggleStatus={props.ToggleStatus}
            DeleteTask={props.DeleteTask}
            mode={props.mode}
            editMode={props.editMode}
          />
        );
      })}
      {props.todos.length === 0 ? (
        props.mode === "filter" ? (
          <p className="center">All Tasks Are Done</p>
        ) : (
          <p className="center">No Tasks Right Now Add New Ones</p>
        )
      ) : null}
    </div>
  );
};

export default Todos;
