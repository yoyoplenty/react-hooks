import React from "react";

const Home = ({ value, onClick }: any) => {
  return (
    <div>
      <p>My current value is {value}</p>
      <button onClick={onClick}>Change State</button>
      {!value && <div>My value has changed</div>}
    </div>
  );
};

export default Home;
