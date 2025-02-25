import React from "react";

const Navbar = () => {
  return (
    <div class="flex justify-between color-3 p-4 items-center">
      <h1 className="font-bold text-2xl ">SHWZ.</h1>
      <ul className="flex gap-20 align-center font-bold">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <button className="rounded-md bg-black text-white font-bold px-6 py-2 ">
        Login
      </button>
    </div>
  );
};

export default Navbar;
