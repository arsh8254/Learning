import React from "react";
import Heading from "./Heading";
import List from "./List";

function App() {
  return (
    <div>
      <Heading />
      <List />
      {/* we can reuse the same component */}
      <List />   
    </div>
  );
}

export default App;
