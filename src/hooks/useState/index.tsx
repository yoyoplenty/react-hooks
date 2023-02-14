import React, { useState } from "react";

const Index = () => {
  const [counter, setCounter] = useState(0);
  const [showText, setShowText] = useState(true);

  const handleIncrement = (event: any) => {
    /*
      Event here is what happend, i.e the typpe of event here is CLICK
       Event.target here is the html element that calls this event handler, i.e the button
      */
    setCounter((prev) => prev + 1);
    setShowText(!showText);
  };

  return (
    <div className="App">
      <p>{counter}</p>

      <div className="btn">
        <button onClick={handleIncrement} type="button">
          INCREMENT
        </button>
      </div>

      {showText && <div>Show Text</div>}
    </div>
  );
};

export default Index;
