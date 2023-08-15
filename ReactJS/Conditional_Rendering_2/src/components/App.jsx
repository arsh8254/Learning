import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {/* we are passing the value of userIsRegistered to form by saving it in isRegistered variable */}
      <Form isRegistered = {userIsRegistered} />
    </div>
  );
}

export default App;
