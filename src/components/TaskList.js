import React from "react";
import Task from "./Task";

function TaskList() {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
    </div>
  );
function TaskList({ tasks, onDelete }) {
  const displayTasks = tasks.map((task, index) => (
    <Task
      key={index}
      text={task.text}
      category={task.category}
      onDelete={onDelete}
    />
  ));

  return <div className="tasks">{displayTasks}</div>;
}
}

export default TaskList;