import React, { useEffect, useLayoutEffect, useRef } from "react";

const Index = () => {
  const inputRef = useRef<any>(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div className="App">
      <h1>Yoyo</h1>
      <input type="text" value="PEDRO" ref={inputRef} />
    </div>
  );
};

export default Index;
