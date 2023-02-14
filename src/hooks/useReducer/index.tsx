import React, { useReducer } from "react";
import { reducer } from "./reducer";

const Index = () => {
  /* Using useReducer for our counter App
     Dispatch here would be used to change the value of our state by passing the type of our action in the reducer funtion
     So here the useReducer passes in the current state and the dispatch type into our reducer function
  */

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleShowText = () => {
    dispatch({ type: "TOOGLE" });
  };

  const handleBoth = () => {
    handleIncrement();
    handleShowText();
  };

  return (
    <div className="App">
      <p>{state.count}</p>

      <div className="btn">
        <button onClick={handleBoth} type="button">
          INCREMENT
        </button>
      </div>

      {state.showText && <div>Show Text</div>}
    </div>
  );
};

export default Index;
