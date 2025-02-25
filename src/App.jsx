import React from "react";
import Navbar from "./components/Navbar";
import Book from "./components/Book";

const books = [
  {
    id: 1,
    bookName: "CleanCode",
    author: "Swz",
    description: "A great book about programming fundamentals",
    price: 5000,
  },
  {
    id: 2,
    bookName: "React Fundamentals",
    author: "xyz",
    description: "A great book about React fundamentals",
    price: 10000,
  },
  {
    id: 3,
    bookName: "JS Beginner Guide",
    author: "xyz",
    description: "A great book about JavaScript",
    price: 2000,
  },
];
const App = () => {
  return (
    <>
      <Navbar />
      {books.map((book, index) => {
        return <Book key={book.id} {...book} />;
      })}
      {/* We use ( instead of { when returning JSX in an arrow function without a return keyword. 
      If we used {, we would need to explicitly write return. */}

      {/* {books.map((book, index) => (
        <Book key={index} {...book} />
      ))} */}
    </>
  );
};

export default App;

{
  // Not the most efficient way to render multiple books - but explains the concept to a beginner:
  /* <Book
        bookName="CleanCode"
        author="Swz"
        description="A great book about programming fundamentals"
        price={5000}
      />
      <Book
        bookName="You Don't Know JS"
        author="Kyle Simpson"
        description="A deep dive into JavaScript concepts."
        price={4000}
      /> */
}
