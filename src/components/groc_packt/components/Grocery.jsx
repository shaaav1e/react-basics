import React from "react";

export default function GroceryList({
  items,
  handleOnToggle,
  handleRemoveItem,
}) {
  return (
    <div className="block mx-auto w-full max-w-md mt-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between p-3 bg-white shadow-md rounded-md mb-2"
        >
          <div className="flex items-center space-x-3">
            {/* Toggle bought status */}
            <button
              onClick={() => handleOnToggle(item.id)}
              className={`text-2xl ${
                item.bought ? "text-green-500" : "text-gray-400"
              }`}
            >
              <i className="ri-checkbox-circle-fill"></i>
            </button>

            {/* Item text */}
            <span
              className={`text-lg font-medium ${
                item.bought ? "line-through text-gray-500" : ""
              }`}
            >
              {item.text}
            </span>
          </div>

          {/* Delete button */}
          <button
            onClick={() => handleRemoveItem(item.id)}
            className="text-red-500 text-2xl hover:text-red-700 transition duration-200"
          >
            <i className="ri-delete-bin-line"></i>
          </button>
        </div>
      ))}
    </div>
  );
}
