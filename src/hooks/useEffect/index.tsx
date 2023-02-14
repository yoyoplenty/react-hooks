import axios from "axios";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [data, setData] = useState("");

  /**
   * You need to be conscious that this functions runs everytime this
   * component is re-rendered, that also means for every state change, useEffect funcion will run
   */

  //This makes and API call as a side effect
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data[0].email);
        console.log("I AM CALLED");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div className="App">{data}</div>;
};

export default Index;
