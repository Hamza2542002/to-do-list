import React, { useState } from "react";
import TasksContext from "../../context/TasksContext";
import { useContext } from "react";

const Header = () => {
  const [TaskNum, setTaskNum] = useState(
    localStorage.getItem("Tasks")
      ? JSON.parse(localStorage.getItem("Tasks")).length
      : 0
  );
  return (
    <header>
      <h1> قائمة المهام ({TaskNum}) </h1>
    </header>
  );
};

export default Header;
