import React from "react";

const userprofile = ({ UserName, email, password }) => {
  return (
    <div className="flex justify-center">
      <div className="inline-block text-center w-1/4 border-amber-400 bg-blue-300 text-black  shadow-blue-400 shadow-xl rounded-lg p-2.5 mt-5">
        <h1>Username:{UserName}</h1>
        <h2 className="font-bold">Email:{email}</h2>
        <p>Password:{password}</p>
      </div>
    </div>
  );
};

export default userprofile;
