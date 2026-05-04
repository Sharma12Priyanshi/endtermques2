import React from "react";
import UserContext from "./UserContext";
import Child from "./Child";

function App() {
  const userData = {
    name: "Priyanshi",
    age: 19
  };

  return (
    <UserContext.Provider value={userData}>
      <div>
        <h1>Parent Component</h1>
        <Child />
      </div>
    </UserContext.Provider>
  );
}

export default App;
