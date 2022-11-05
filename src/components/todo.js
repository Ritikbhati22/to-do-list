import React, { useState } from "react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };
  const deleteItem = (id) => {
    console.log("");
    const updateitem = items.filter((element, index) => {
      return index != id;
    });
    setItems(updateitem);
  };
  const removeAll = () => {
    setItems([]);
  };
  return (
    <div>
      <div className="text-center font-bold text-2xl text-zinc-300 bg-zinc-600 p-3">
        <figure>
          <figcaption>Add List here</figcaption>
        </figure>
      </div>
      <div className="text-center pt-20 text-zinc-900 pt">
        <input
          type="text"
          placeholder="  Add Items..."
          className="rounded-sm "
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <i
          className="fa fa-plus add-btn text-green-200 pl-2 pt-2"
          title="Add Item"
          onClick={addItem}
        ></i>
      </div>
      <div>
        {items.map((element, index) => {
          return (
            <div className="text-center pt-2 text-zinc-200 text-xl " key={index}>
              <h3 className="text-zinc-400 font-serif pt-3 ">{element}</h3>
              <i
                className="fas fa-trash-alt"
                onClick={() => deleteItem(index)}
              ></i>
            </div>
          );
        })}
      </div>
      <div className="text-center pt-10 text-red-300 text-xl ">
        <button onClick={removeAll}>
          <span className="bg-red-600 rounded-sm font-mono ">Remove All</span>
        </button>
      </div>
    </div>
  );
};

export default Todo;
