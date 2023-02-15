import { createContext, useState } from "react";
import "./App.css";
import { Login } from "./Login";
import { User } from "./User";

/**
 * Here we are creating a context, which is basically a collection of states/information
 * that i want all child component here have an access to without passing props
 * it also needs to exported so the child component can know they are using a context provider by this parent
 */
export const AppContext = createContext<any>(null);

function App() {
  const [username, setUsername] = useState("");

  //Wrap this information around child components that are going to have access
  return (
    /*
     *Here pass a value to the provider you want them to access
     *and you also need to let the child components they are expectiong a value from a provide
     */
    <AppContext.Provider value={{ username, setUsername }}>
      <Login />
      <User />
    </AppContext.Provider>
  );
}

export default App;
