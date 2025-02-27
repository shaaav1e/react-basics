import React, { useState } from "react";

const RandomQuote = ({ quote, color, onChange }) => {
  // const [quote, setQuote] = useState("");
  // const [color, setColor] = useState("bg-blue-300");
  // const quotes = [
  //   {
  //     author: "Swz",
  //     content: "Patience is the solution to every problem.",
  //   },
  //   {
  //     author: "Nelson Mandela",
  //     content: "It always seems impossible until it’s done.",
  //   },
  //   {
  //     author: "Helen Keller",
  //     content: "Keep your face to the sunshine and you cannot see a shadow.",
  //   },
  //   {
  //     author: "Zig Ziglar",
  //     content:
  //       "Positive thinking will let you do everything better than negative thinking will.",
  //   },
  //   {
  //     author: "Oprah Winfrey",
  //     content:
  //       "The biggest adventure you can take is to live the life of your dreams.",
  //   },
  //   {
  //     author: "Steve Jobs",
  //     content: "The only way to do great work is to love what you do.",
  //   },
  //   {
  //     author: "Albert Einstein",
  //     content: "In the middle of every difficulty lies opportunity.",
  //   },
  //   {
  //     author: "Dale Carnegie",
  //     content:
  //       "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",
  //   },
  //   {
  //     author: "Roy T. Bennett",
  //     content:
  //       "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  //   },
  // ];
  // function getRandomQuote() {
  //   const randomIndex = Math.floor(Math.random() * quotes.length);
  //   setQuote(quotes[randomIndex]);
  //   setColor(getRandomColor());
  // }
  // function getRandomColor() {
  //   const colors = [
  //     { color: "bg-red-600" },
  //     { color: "bg-yellow-400" },
  //     { color: "bg-green-500" },
  //     { color: "bg-blue-300" },
  //     { color: "bg-blue-400" },
  //     { color: "bg-amber-700" },
  //     { color: "bg-slate-100" },
  //   ];
  //   return colors[Math.floor(Math.random() * colors.length)];
  // }

  return (
    <div className="flex items-center justify-center mt-5 mb-5">
      <div
        className={`inline-block text-center border-black shadow-blue-950 shadow-md p-8 rounded-md ${color}`}
      >
        {" "}
        <h1 className="font-bold">Random Quote Generator</h1>
        <h3 className="mt-2.5 text-xl">"{quote.content}"</h3>
        <p className="italic opacity-50">-{quote.author}</p>
        <button
          className=" bg-white text-black font-bold px-6 py-2 rounded-sm mt-2.5 hover:opacity-55"
          onClick={onChange}
        >
          Generate Quote
        </button>
      </div>
    </div>
  );
};

export default RandomQuote;
