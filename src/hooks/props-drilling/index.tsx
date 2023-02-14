import React, { useState } from "react";
import Home from "./home";

const Index = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return <Home value={toggle} onClick={handleToggle} />;
};

export default Index;
