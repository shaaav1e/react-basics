import React from "react";

const GroceryList = () => {
  const [item, setItem] = React.useState("");
  const [groceryList, setGroceryList] = React.useState([]);
  function addItem(e) {
    e.preventDefault();
    if (item !== "") {
      setGroceryList([...groceryList, item]);
      setItem("");
    } else {
      alert("Item cannot be empty.");
    }
  }
  function handleChange(e) {
    setItem(e.target.value);
  }
  function deleteItem(index) {
    setGroceryList((prevList) => prevList.filter((item, i) => i !== index));
  }
  function editItem(index) {
    setGroceryList((prevList) => {
      prevList.map((item, i) => {
        console.log(`${index} out of ${i} purchased`);
        setItem("Purchased");
      });
    });
  }
  return (
    <div>
      <h1 className="font-bold text-center">GROCERY LIST.</h1>
      <div className="flex flex-col justify-center items-center">
        <input
          value={item}
          onChange={handleChange}
          type="text"
          className="border rounded-md p-2 "
          placeholder="Enter your grocery item"
        />
        <button onClick={addItem} className="btn !bg-blue-500 !text-white">
          Add Item
        </button>
      </div>
      <div>
        {groceryList.map((item, i) => (
          <div
            key={i}
            className="px-4 py-2 flex flex-col justify-center items-center border rounded-sm w-fit mx-auto mt-3"
          >
            <div className="flex gap-3">
              {item}
              <i
                onClick={() => editItem(i)}
                className="ri-check-line text-xl text-green-700"
              ></i>
              <i
                onClick={() => deleteItem(i)}
                className="ri-delete-bin-6-line text-xl text-red-600"
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GroceryList;
