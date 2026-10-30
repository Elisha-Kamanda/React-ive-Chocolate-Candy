import React from "react";

function CandyCard(props) {
  return (
    <div className="candy-card">
      <img 
        src={`/images/${props.candy.image}`} 
        alt={props.candy.name} 
        className="candy-image" 
      />
      <h3>{props.candy.name}</h3>
      <button onClick={() => props.onSelect(props.candy)}>
        View Calories
      </button>
    </div>
  );
}

export default CandyCard;