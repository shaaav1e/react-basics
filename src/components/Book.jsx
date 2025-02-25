import React from "react";

const Book = ({ bookName, author, description, price }) => {
  // Destructuring in JavaScript is a syntax that allows extracting values from arrays or objects into separate variables in a concise way:
  //   bookName, author, description, price
  //   (props) -> passed as parameter
  //   const bookName = "Clean Code";
  //   const author = "Robert C. Martin";
  //   const description = "A Great book about programming fundamentals.";
  //   const price = 5000;

  return (
    <div className="text-center mt-20 prose">
      <h2>{bookName}</h2>
      <h3>By {author}</h3>
      <p>{description}</p>
      <p>Price : {price} Pkr</p>
    </div>
  );
};

export default Book;
