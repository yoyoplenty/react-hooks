import { useRef } from "react";
import Button from "./button";

function Home() {
  //Setting a default reference
  const buttonRef = useRef<any>(null);

  return (
    <>
      <button
        onClick={() => {
          //This is accessing the reference that is set from the child component
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>

      {/* Setting a default reference to the child component} */}
      <Button ref={buttonRef} />
    </>
  );
}

export default Home;
