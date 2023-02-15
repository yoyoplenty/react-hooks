/*Here we are importing the context provider here to let
 *this component know its using this context provider
 *But we still need to grab the value from the provider
 */
import { useContext } from "react";
import { AppContext } from "./App";

export const User = () => {
  //Here we grap the value from the parent provider
  const { username } = useContext(AppContext);

  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
};
