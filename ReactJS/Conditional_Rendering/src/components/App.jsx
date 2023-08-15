import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date(2023, 11, 1, 9).getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {/*Ternary Operator is used */}
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {/*AND Operator is used */}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
