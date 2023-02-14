import React, { useRef } from "react";

const Index = () => {
  /**'
   Used to name the input element we want to reference
   Here we referencing the input element by passing the ref attributes
   * 
   */
  const inputRef = useRef<any>(null);

  //we need to specify the current reference value to get the exact value
  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div className="App">
      <h1>Yoyo</h1>
      <input type="text" placeholder="Ex...." ref={inputRef} />
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default Index;
