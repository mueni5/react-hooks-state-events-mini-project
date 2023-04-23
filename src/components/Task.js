import React from "react";

function Task() {
function Task(props) {
  function handleDelete() {
    props.onDelete(props.text);
  }
  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
      <div className="label">{props.category}</div>
      <div className="text">{props.text}</div>
      <button id={props.text} className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}
}
export default Task;
