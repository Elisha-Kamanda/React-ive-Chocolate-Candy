import React, { useState } from "react";
import { candiesData } from "./candiesData";
import CandyContainer from "./CandyContainer";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [selectedCandy, setSelectedCandy] = useState(null);

  return (
    <div className="App">
      <h1>React-ive Chocolate Candy Boxes</h1>
      <CandyContainer 
        candies={candiesData} 
        onSelectCandy={(candy) => setSelectedCandy(candy)} 
      />
      <Modal 
        candy={selectedCandy} 
        onClose={() => setSelectedCandy(null)} 
      />
    </div>
  );
}

export default App;