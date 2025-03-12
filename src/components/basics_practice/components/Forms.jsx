import React from "react";
// import { Button } from "@/components/ui/button";

function NameForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    age: "",
    email: "",
  });
  const [profiles, setProfiles] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.name && formData.age && formData.email != null) {
      setProfiles([...profiles, formData]);
      setFormData({
        name: "",
        age: "",
        email: "",
      });
    } else {
      alert("Form details cannot be empty.");
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <div className="flex flex-col justify-center items-center  ">
      <form
        className="flex flex-col justify-center items-center gap-4 "
        onSubmit={handleSubmit}
      >
        <input
          className="bg-blue-400 border- text-black font-bold rounded-md shadow-blue-600 px-2 py-1"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <input
          className="bg-blue-400 border- text-black font-bold rounded-md shadow-blue-600 px-2 py-1"
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />
        <input
          className="bg-blue-400 border- text-black font-bold rounded-md shadow-blue-600 px-2 py-1"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <button className="btn !bg-blue-500 !text-white">Submit</button>
      </form>
      <h1 className="font-bold mt-3">Output:</h1>
      <ul className="p-3 mt-3 space-y-5">
        {profiles.map((profile, i) => (
          <li
            key={i}
            className="border rounded-lg space-y-4 shadow-md p-8 bg-white"
          >
            Name: {profile.name} <br /> Age: {profile.age} <br /> Email:{" "}
            {profile.email}, <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NameForm;
