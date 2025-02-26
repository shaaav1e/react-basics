import React from "react";
import Navbar from "./components/Navbar";
import Book from "./components/Book";
import UserProfile from "./components/userprofile";
import cleanCodeImg from "./assets/cleancode.jpg";
import reactbook from "./assets/react.jpg";
import jsbook from "./assets/js.png";
import RandomQuote from "./components/quotes_app/components/RandomQuote";

const books = [
  {
    id: 1,
    bookName: "CleanCode",
    author: "Robert C. Martin",
    description: "A great book about Clean Code",
    price: 5000,
    img: cleanCodeImg,
  },
  {
    img: reactbook,
    id: 2,
    bookName: "React Fundamentals",
    author: "Robin Wieruch",
    description: "A great book about React fundamentals",
    price: 10000,
  },
  {
    img: jsbook,
    id: 3,
    bookName: "JS Beginner Guide",
    author: "Robert Peterson",
    description: "A great book about JavaScript",
    price: 2000,
  },
];
const users = [
  {
    id: 1,
    UserName: "shaaav1e",
    email: "shaaavie@gmail.com",
    password: "*******",
  },
  {
    id: 2,
    UserName: "Mtk",
    email: "mtk@gmail.com",
    password: "********",
  },
];
const App = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3 gap-4 p-5">
        {books.map((book, index) => {
          return <Book key={index} {...book} />;
        })}
      </div>
      {users.map((user) => {
        return <UserProfile key={user.id} {...user} />;
      })}
      <RandomQuote />
    </>
  );
};

export default App;

// {
//   // Not the most efficient way to render multiple books - but explains the concept to a beginner:
//   /* <Book
//         bookName="CleanCode"
//         author="Swz"
//         description="A great book about programming fundamentals"
//         price={5000}
//       />
//       <Book
//         bookName="You Don't Know JS"
//         author="Kyle Simpson"
//         description="A deep dive into JavaScript concepts."
//         price={4000}
//       /> */

//   {
//     /* ______________________________________________________________________________________ */
//   }
//   {
//     /* We use ( instead of { when returning JSX in an arrow function without a return keyword.
//       If we used {, we would need to explicitly write return. */
//   }

//   {
//     /* {books.map((book, index) => (
//         <Book key={index} {...book} />
//       ))} */
//   }

//   {
//     /* ______________________________________________________________________________________ */
//   }
// }
