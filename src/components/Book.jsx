import React from "react";
import { useState } from "react";

const Book = ({ bookName, author, description, price, img }) => {
  //   Destructuring in JavaScript is a syntax that allows extracting values from arrays or objects into separate variables in a concise way:
  //   bookName, author, description, price
  //   (props) -> passed as parameter
  //   const bookName = "Clean Code";
  //   const author = "Robert C. Martin";
  //   const description = "A Great book about programming fundamentals.";
  //   const price = 5000;
  //   let isRead = false; //should never do changing of state like this in React
  const [isRead, setIsRead] = useState("Mark as Read");
  return (
    <div className="flex flex-col gap-4 items-center bg-blue-300 text-black font-bold shadow-blue-400 shadow-xl rounded-lg p-2.5 mt-5 ">
      <img src={img} className=" h-48 object-contain" alt="CleanCode"></img>
      <h2>Book: {bookName}</h2>
      <h3>By: {author}</h3>
      <p>Title: {description}</p>
      <p>Price: {price} Pkr</p>
      <button
        // To Update a view we must update the state.
        onClick={() => {
          setIsRead((prev) =>
            prev === "Mark as Read" ? "Unread" : "Mark as Read"
          );
        }}
        className="flex items-center gap-1 rounded-sm px-5 py-1.5 text-zinc-700 bg-white hover:opacity-80"
      >
        {isRead}
        <i
          className={
            isRead === "Mark as Read" ? "ri-check-line" : "ri-close-fill"
          }
        ></i>
      </button>
    </div>
  );
};

export default Book;
