import React from "react";

function NameForm() {
  return (
    <div className="flex flex-col justify-center items-center mt-3 mb-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submitted");
        }}
      >
        <input
          className="bg-blue-400 border- text-black font-bold rounded-md shadow-blue-600 px-2 py-1"
          type="text"
          placeholder="Forms in React."
        />
        <button className="btn bg-blue-500 ">Submit</button>
      </form>
    </div>
  );
}

export default NameForm;
