import React, { useContext } from "react";
import UserContext from "./UserContext";

function NavBar() {
  const { user, setUser } = useContext(UserContext);
  function changeUser() {
    setUser({
      name: "Nisha",
      isLoggedIn: true,
    });
  }
  return (
    <>
      <h3>Hello {user.name} from NavBar</h3>
      <button onClick={changeUser}>Change</button>
    </>
  );
}

export default NavBar;
