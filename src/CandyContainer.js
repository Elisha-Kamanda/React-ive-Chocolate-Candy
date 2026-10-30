import React from "react";
import CandyCard from "./CandyCard";

function CandyContainer(props) {
  return (
    <div className="candy-container">
      {props.candies.map((candy) => (
        <CandyCard 
          key={candy.id} 
          candy={candy} 
          onSelect={props.onSelectCandy} 
        />
      ))}
    </div>
  );
}

export default CandyContainer;