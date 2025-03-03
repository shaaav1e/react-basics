import React from "react";

const GroceryList = () => {
  const [item, setItem] = React.useState("");
  const [groceryList, setGroceryList] = React.useState([]);
  const [purchasedItems, setPurchasedItems] = React.useState(new Set());

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
    // Remove the item from the grocery list
    setGroceryList((prevList) => prevList.filter((item, i) => i !== index));

    // Remove the item from the purchased items set (if it was marked as purchased)
    setPurchasedItems((prevSet) => {
      let updatedSet = new Set(prevSet); // Create a copy of the set
      updatedSet.delete(index); // Remove the item from the set
      return updatedSet; // Update state
    });
  }

  function editItem(index) {
    setPurchasedItems((prevSet) => {
      const newSet = new Set(prevSet); // Create a copy of the previous purchased items set

      if (newSet.has(index)) {
        // If the item is already marked as purchased, remove it (toggle off)
        newSet.delete(index);
      } else {
        // If the item is not marked as purchased, add it (toggle on)
        newSet.add(index);
      }

      return newSet; // Update the state with the modified set
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
        <button onClick={addItem} className="btn !bg-blue-500 !text-white mt-2">
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
              <span
                className={
                  purchasedItems.has(i) ? "line-through text-gray-500" : ""
                }
              >
                {item}
              </span>
              <i
                onClick={() => editItem(i)}
                className="ri-check-line text-xl cursor-pointer text-green-700"
              ></i>
              <i
                onClick={() => deleteItem(i)}
                className="ri-delete-bin-6-line text-xl cursor-pointer text-red-600"
              ></i>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center font-semibold mt-4">
        {purchasedItems.size} out of {groceryList.length} items purchased
      </div>
    </div>
  );
};

export default GroceryList;
