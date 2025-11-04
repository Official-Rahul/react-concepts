import React from "react";
import Hr from "../../../helpers/hr";
import Page from "./Page";
import UserContextProvider from "./UserContextProvider";

function UseContext() {
  return (
    <div>
      <h2>Use Context</h2>
      <p>
        useContext is a React Hook that allows you to access values from a
        Context directly — without having to pass props manually through every
        level of the component tree.
      </p>
      <ul>
        <li>
          Passing props through 3–4 layers | useContext lets you skip
          intermediate components
        </li>
        <li>
          Global app data like theme, user, settings | Ideal for shared/global
          state
        </li>
        <li>
          Complex state management | Use with useReducer for mini Redux-like
          systems
        </li>
      </ul>
      <Hr />
      <UserContextProvider>
        <Page />
        {/* no need for props passing to each component in component tree */}
      </UserContextProvider>
    </div>
  );
}

export default UseContext;
