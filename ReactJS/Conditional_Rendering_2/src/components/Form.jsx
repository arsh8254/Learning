import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      
      {/* if value is false -- show confirm password button */}
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}

      {/* if value is true -- we show login */}
      {/* if value is false -- we show register */}
      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
