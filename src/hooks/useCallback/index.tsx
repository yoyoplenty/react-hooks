import { useCallback, useState } from "react";
import { Child } from "./child";

const Index = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("This is a useCallback example");

  /**
   *When we toggle and the state changes and component re renders the returnComment changes
   *which makes the useEffect function gets called again, and again
   *Now we need to tell returnComment(function) to change only if the return data changes
   *And this is done by storing the function in the useCallback hook and then setting a dependency that
   *can chnage the function
   */

  /**
   * Here use callback stores the function and on every re render the
   */
  const returnComment = useCallback(
    (name: any) => {
      return data + name;
    },
    [data]
  );

  return (
    <div>
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <div>Showed</div>}
    </div>
  );
};

export default Index;
