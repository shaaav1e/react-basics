import React from "react";
import Navbar from "./components/Navbar";
import Book from "./components/Book";
import UserProfile from "./components/userprofile";
import cleanCodeImg from "./assets/cleancode.jpg";
import reactbook from "./assets/react.jpg";
import jsbook from "./assets/js.png";
import RandomQuote from "./components/quotes_app/components/RandomQuote";
import { useState, useEffect } from "react";
import Counter from "./components/Counter";
import NameForm from "./components/Forms";
// import { Button } from "@/components/ui/button";
import GroceryList from "./components/grocery_app/components/GroceryList";
import Grocery from "./components/groc_packt/components/Grocery";
import GroceryNav from "./components/groc_packt/components/GroceryNav";
import GroceryForm from "./components/groc_packt/components/GroceryForm";
import GroceryFooter from "./components/groc_packt/components/GroceryFooter";
import FetchComponent from "./components/FetchComponent";
const App = () => {
  // Books data
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

  // Users data
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

  // Random Quote data
  const [quote, setQuote] = useState({
    author: "",
    content: "Click the button to get a random quote",
  });
  const [color, setColor] = useState("bg-blue-300");
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

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    setColor(getRandomColor());
  }
  function getRandomColor() {
    const colors = [
      "bg-red-600",
      "bg-yellow-400",
      "bg-green-500",
      "bg-blue-300",
      "bg-blue-400",
      "bg-amber-700",
      "bg-slate-100",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  // Simple Counter data
  const [count, setCount] = useState(0);
  const Increment = () => {
    // const [count, setCount] = useState(0);
    setCount(count + 1);
  };
  const Decrement = () => {
    // const [count, setCount] = useState(0);
    setCount(count - 1);
  };
  // Grocery - grocery_app is different
  const [groceriesItems, setGroceriesItems] = useState([]);
  const [groceryInput, setGroceryInput] = useState("");

  function handleOnChange(e) {
    setGroceryInput(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (!groceryInput.trim()) return;

    const newGrocery = {
      id: Date.now(),
      text: groceryInput,
      bought: false,
    };

    setGroceriesItems([newGrocery, ...groceriesItems]);
    setGroceryInput("");
  }

  function toggleBought(id) {
    setGroceriesItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  }

  function handleRemoveItem(id) {
    setGroceriesItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  }

  const totalItems = groceriesItems.length;
  const totalBought = groceriesItems.filter((item) => item.bought).length;

  // useEffect - Interval Example
  function AdjustableTimer() {
    const [second, setSecond] = useState(0);
    const [intervalms, setIntervalMS] = useState(1000);
    useEffect(() => {
      const interval = setInterval(() => {
        setSecond((prevvalue) => prevvalue + 1);
      });
    }, [intervalms]);
    return (
      <div>
        <h1>Seconds:{second}</h1>
        <input
          type="number"
          value={intervalms}
          onChange={(e) => setIntervalMS(Number(e.target.value))}
        />
      </div>
    );
  }
  // Returning in App component
  return (
    <>
      <Navbar />
      <h1 className="font-bold mt-3 text-center">Books.JSX</h1>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-4 p-5">
        {books.map((book, index) => {
          return <Book key={index} {...book} />;
        })}
      </div>
      <h1 className="font-bold mt-3 text-center">UserProfile.Jsx</h1>
      {users.map((user) => {
        return <UserProfile key={user.id} {...user} />;
      })}
      {/* <hr></hr> */}
      <h1 className="font-bold mt-5 text-center">RandomQuote.Jsx</h1>
      <RandomQuote quote={quote} color={color} onChange={getRandomQuote} />
      <h1 className="font-bold mt-3 text-center">Counter.JSX</h1>
      <Counter count={count} Increment={Increment} Decrement={Decrement} />
      <h1 className="font-bold mt-3 text-center">Forms.JSX</h1>
      <NameForm />
      {/* <Button>ShadCn</Button> */}

      {/* <GroceryList /> */}
      <GroceryNav />
      <GroceryForm
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        item={groceryInput}
      />
      <Grocery
        items={groceriesItems}
        handleOnToggle={toggleBought}
        handleRemoveItem={handleRemoveItem}
      />
      <GroceryFooter totalBought={totalBought} totalItems={totalItems} />
      <FetchComponent />
      <AdjustableTimer />
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
