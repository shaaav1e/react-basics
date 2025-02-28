import React from "react";

const userprofile = ({ UserName, email, password }) => {
  return (
    <div className="flex justify-center">
      <div className="text-center  border-amber-400 bg-blue-300 text-black  shadow-blue-400 shadow-xl rounded-lg px-6 leading-8 py-4 mt-5">
        <h1>Username:{UserName}</h1>
        <h2 className="font-bold">Email:{email}</h2>
        <p>Password:{password}</p>
      </div>
    </div>
  );
};

export default userprofile;
