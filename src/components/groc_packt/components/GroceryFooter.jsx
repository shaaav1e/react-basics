import React from "react";

export default function GroceryFooter({ totalBought, totalItems }) {
  return (
    <footer className="block mx-auto w-full max-w-md mt-6 bg-white shadow-md p-3 text-center rounded-md">
      <p className="text-gray-700 text-lg font-medium">
        {totalBought} of {totalItems} items bought
      </p>
    </footer>
  );
}
