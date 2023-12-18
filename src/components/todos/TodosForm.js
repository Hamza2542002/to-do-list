import React, { useEffect, useState } from "react";
import FeatherIcon from "feather-icons-react";
const TodosForm = ({ AddTask, FilterDone, mode, activeTask }) => {
  var defaultName;
  useEffect(() => {
    defaultName = mode === "edit" ? activeTask.name : "";
    setText(defaultName);
  }, [mode, activeTask]);
  const [text, setText] = useState(defaultName);
  const HandleClick = () => {
    if (!text.trim()) {
      return;
    }
    AddTask(text);
    setText("");
  };
  return (
    <div className="todos-form">
      <div
        className={`todos-form_icon ${mode === "filter" ? "active" : ""}`}
        onClick={() => FilterDone()}
      >
        <FeatherIcon icon="circle" />
      </div>
      <div className="todos-form_form">
        <input
          type="text"
          placeholder="اضف مهمة جديدة ..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="todos-form_submit">
        <button
          className="btn"
          onClick={HandleClick}
          disabled={!text ? true : null}
        >
          {" "}
          {mode === "edit" ? "تعديل" : "إضافة"}
        </button>
      </div>
    </div>
  );
};

export default TodosForm;
