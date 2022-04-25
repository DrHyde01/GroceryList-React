import React from "react";
import { useState, useEffect, Fragment } from "react";

const List = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  //Add item from the input
  const handleChange = (e) => {
    setItem(e.target.value);
  };

  // And move item to the array
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, item]);

    setItem("");
  };

  // Add updated list to LocalStorage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <Fragment>
      <div className="flex flex-col items-center min-h-screen w-full py-10">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center align-middle w-full p-2.5 m-10 animate-titleAppear"
        >
          <input
            onChange={handleChange}
            type="text"
            value={item}
            className="border-2 border-solid w-1/3 h-10 pl-2"
            placeholder="Add a product"
          />
          <button className="flex justify-center items-center ml-3">Add</button>
        </form>
      </div>
    </Fragment>
  );
};

export default List;
