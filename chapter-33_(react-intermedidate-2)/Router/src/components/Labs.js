import React from "react";
import { useNavigate } from "react-router-dom";
// import { useLinkClickHandler } from "react-router-dom";
const Labs = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/about");
  }

  return (
    <div>
      <h1>Labs Page</h1>
      <button onClick={clickHandler}>Move to About Page</button>
    </div>
  );
};

export default Labs;   // 👈 Capital L
