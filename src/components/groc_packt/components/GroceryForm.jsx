import React from "react";

export default function GroceryForm({ item, handleOnSubmit, handleOnChange }) {
  return (
    <form
      onSubmit={handleOnSubmit}
      className="block mx-auto w-full max-w-md mt-4"
    >
      <div className="flex space-x-2">
        <input
          className="w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-400"
          placeholder="Enter grocery item..."
          value={item}
          onChange={handleOnChange}
          type="text"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
          Add
        </button>
      </div>
    </form>
  );
}
