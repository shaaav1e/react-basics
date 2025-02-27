import React from "react";
import Navbar from "./components/Navbar";
import Book from "./components/Book";
import UserProfile from "./components/userprofile";
import cleanCodeImg from "./assets/cleancode.jpg";
import reactbook from "./assets/react.jpg";
import jsbook from "./assets/js.png";
import RandomQuote from "./components/quotes_app/components/RandomQuote";

const App = () => {
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
  const quotes = [
    {
      author: "Swz",
      content: "Patience is the solution to every problem.",
    },
    {
      author: "Nelson Mandela",
      content: "It always seems impossible until it’s done.",
    },
    {
      author: "Helen Keller",
      content: "Keep your face to the sunshine and you cannot see a shadow.",
    },
    {
      author: "Zig Ziglar",
      content:
        "Positive thinking will let you do everything better than negative thinking will.",
    },
    {
      author: "Oprah Winfrey",
      content:
        "The biggest adventure you can take is to live the life of your dreams.",
    },
    {
      author: "Steve Jobs",
      content: "The only way to do great work is to love what you do.",
    },
    {
      author: "Albert Einstein",
      content: "In the middle of every difficulty lies opportunity.",
    },
    {
      author: "Dale Carnegie",
      content:
        "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
    },
    {
      author: "Roy T. Bennett",
      content:
        "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    },
  ];
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
