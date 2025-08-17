import React, { useState } from "react";
// import React from "react";
//import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function decreaseHandler() {
    setCount(count - 1);
  }
  function increaseHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">
        Increment && Decrement{" "}
      </div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button
          type="button"
          onClick={decreaseHandler}
          className="border-r-2 px-4 py-2 focus:outline-none focus:ring-0 active:bg-transparent"
        >
          -
        </button>

        <div className="px-6 py-2 text-3xl font-bold">{count}</div>

        <button
          type="button"
          onClick={increaseHandler}
          className="border-l-2 px-4 py-2 focus:outline-none focus:ring-0 active:bg-transparent">
          +
        </button>
      </div>

      <button
        onClick={resetHandler}
        className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg" >
        Reset
      </button>
    </div>
  );
}
export default App;
