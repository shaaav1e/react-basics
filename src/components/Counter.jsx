import React from "react";

const Counter = ({ count, Increment, Decrement }) => {
  return (
    <div className="flex justify-center items-center text-black font-bold  mt-3 p-4">
      <div className="inline-block text-center rounded-md shadow-md  space-x-4 p-4 bg-blue-300">
        <h1 className="font-bold">Counter: {count}</h1>
        <button className="btn" onClick={Increment}>
          Increment
        </button>
        <button className="btn" onClick={Decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
