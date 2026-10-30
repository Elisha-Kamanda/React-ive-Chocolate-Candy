import React from "react";

function Modal(props) {
  if (!props.candy) {
    return null;
  }

  return (
    <div className="modal-background">
      <div className="modal-box">
        <h2>{props.candy.name}</h2>
        <p><strong>Calories:</strong> {props.candy.calories} kcal</p>
        <p><strong>Description:</strong> {props.candy.description}</p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;