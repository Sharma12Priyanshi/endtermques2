
import React, { useContext } from "react";
import UserContext from "./UserContext";

function GrandChild() {
  const user = useContext(UserContext);

  return (
    <div>
      <h3>GrandChild Component</h3>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default GrandChild;