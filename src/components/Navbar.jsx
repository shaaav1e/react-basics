import React from "react";

const Navbar = () => {
  return (
    <div class="flex justify-between color-3 p-4 items-center">
      <h1 className="font-bold text-2xl ">REACT.</h1>
      <ul className="flex gap-20 align-center font-bold">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Books</a>
        </li>
        <li>
          <a href="#">UserProfile</a>
        </li>
        <li>
          <a href="#">Key Info</a>
        </li>
      </ul>
      <button className="rounded-md text-zinc-700 bg-white font-bold px-6 py-2 ">
        Login
      </button>
    </div>
  );
};

export default Navbar;
