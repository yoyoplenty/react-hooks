/*Here we are importing the context provider here to let
 *this component know its using this context provider
 *But we still need to grab the value from the provider
 */
import { useContext } from "react";
import { AppContext } from "./App";

export const Login = () => {
  /*
   *  Here we grap the value from the parent provider
   *  which is the setstate function that changes the username
   */
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
      />
    </div>
  );
};
