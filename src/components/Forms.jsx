import React from "react";

function NameForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    age: "",
    email: "",
  });
  const [profiles, setProfiles] = React.useState([]);
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="flex flex-col justify-center items-center mt-3 ">
      <form
        className="flex flex-col justify-center items-center gap-4 "
        onSubmit={handleSubmit}
      >
        {/* ^not calling,only referencing^ */}
        <input
          className="bg-blue-400 border- text-black font-bold rounded-md shadow-blue-600 px-2 py-1"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <input
          className="bg-blue-400 border- text-black font-bold rounded-md shadow-blue-600 px-2 py-1"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
        />
        <input
          className="bg-blue-400 border- text-black font-bold rounded-md shadow-blue-600 px-2 py-1"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button className="btn !bg-blue-500 !text-white">Submit</button>
      </form>
      {/* <p>{name}</p> */}
      <ul>
        {names.map((nameItem, i) => (
          <li key={i} className="">
            {nameItem}
          </li>
        ))}
      </ul>
      <ul>
        {ages.map((ageItem, i) => (
          <li key={i} className="">
            {ageItem}
          </li>
        ))}
      </ul>
      <ul>
        {emails.map((emailItem, i) => (
          <li key={i} className="">
            {emailItem}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NameForm;
