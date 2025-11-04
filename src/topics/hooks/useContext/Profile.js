import React, { useContext } from "react";
import UserContext from "./UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  return <h3>Hello {user.name} from Profile</h3>;
}

export default Profile;
