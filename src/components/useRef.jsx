import React, { useState, useEffect, useRef } from "react";

const UseRefExample = () => {
  const [inputValue, setinputValue] = useState("");
  const a = useRef(0);
  const previousInputValue = useRef("");
  useEffect(() => {
    a.current = a.current + 1;
    previousInputValue.current = inputValue;
    console.log(`Render:${a.current}`);
  }, [inputValue]);
  return (
    <div className="mx-auto w-[80%] text-center mt-5">
      <input
        className="border-2 border-gray-900 rounded-md px-4 py-2"
        type="text"
        placeholder="Enter anything"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      />
      <h1>CurrentValue:{inputValue}</h1>
      <h1>PreviousValue:{previousInputValue.current}</h1>
    </div>
  );
};

export default UseRefExample;

// UseRef:
// Doesnot causes Re-renders
// If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
// remembers a value between re-renders
// can change value without triggering re-render like useState (which updates UI)
// lets you directly access a DOM element without using document.getElementById

//________________________________________________________________________________

// const UseRefExample = () => {
//     const [inputValue, setinputValue] = useState("");
//     const count = useRef(0);
//     useEffect(() => {
//       count.current = count.current + 1;
//     });
//     return (
//       <div className="mx-auto w-[80%] text-center mt-5">
//         <input
//           type="text"
//           placeholder="Enter anything"
//           value={inputValue}
//           onChange={(e) => setinputValue(e.target.value)}
//         />
//         <h1>Render:{count.current}</h1>
//       </div>
//     );
//   };

//________________________________________________________________________________

//DOM:
{
  /* <input type="text" ref={inputElement} />
  const inputElement = useRef(); */
}
