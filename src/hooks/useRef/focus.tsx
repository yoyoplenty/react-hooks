import React, { useRef } from "react";

const Focus = () => {
  const inputRef = useRef<any>(null);

  //we need to specify the current reference value to get the exact value
  const handleClick = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="App">
      <h1>Yoyo</h1>
      <input type="text" placeholder="Ex...." ref={inputRef} />
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default Focus;
