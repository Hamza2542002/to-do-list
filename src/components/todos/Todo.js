import React from "react";
import FeatherIcon from "feather-icons-react";
const Todo = ({ task, ToggleStatus, DeleteTask, editMode, mode }) => {
  return (
    <div className={`todos-todo ${task.done ? "done" : ""}`}>
      <div
        className="todos-todo_icon"
        onClick={() => {
          ToggleStatus(task.id);
        }}
      >
        <FeatherIcon icon={`${task.done ? "check-circle" : "circle"}`} />
      </div>
      <div className="todos-todo_text"> {task.name}</div>
      {mode === "edit" ? (
        ""
      ) : (
        <div className="todos-todo_cta">
          <div className="todos-todo_cta-edit" onClick={() => editMode(task)}>
            <FeatherIcon icon="edit" size="20" />
          </div>
          <div
            className="todos-todo_cta-delete"
            onClick={() => {
              DeleteTask(task.id);
            }}
          >
            <FeatherIcon icon="trash-2" size="20" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
