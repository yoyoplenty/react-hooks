import axios from "axios";
import { useEffect, useMemo, useState } from "react";

/**
 * Currently the longest name function gets called if any state changes with makes
 * the optimization and performance of our Indexlication slower
 * to make the longestname function called only when our data changes we need to use
 * the useMemo hook
 */

function Index() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
      setData(response.data);
    });
  }, []);

  const findLongestName = (comments: any) => {
    if (!comments) return null;

    let longestName = "";

    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) longestName = currentName;
    }

    console.log("THIS WAS COMPUTED");
    return longestName;
  };

  /**
   * Create a new name for the useMemo hook, and then pass the function
   * with the depedency that will trigger the to be executed again
   */
  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div>
      <div>{getLongestName}</div>
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
}

export default Index;
