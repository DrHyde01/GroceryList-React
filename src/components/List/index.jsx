import React from "react";
import { useState, useEffect, Fragment } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Items from "../Items";

const AddItem = () => {
  // First, get localStorage data if exists
  const getLocalStorageData = () => {
    let list = localStorage.getItem("list");

    if (list) {
      return (list = JSON.parse(localStorage.getItem("list")));
    } else {
      return [];
    }
  };

  const [item, setItem] = useState("");
  const [list, setList] = useState(getLocalStorageData);

  //Add item from the input
  const handleChange = (e) => {
    setItem(e.target.value);
  };

  // And move item to the state
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, item]);
    setItem("");
  };

  // Add state to LocalStorage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <Fragment>
      <div className="flex flex-col items-center min-h-screen w-full py-10 bg-gray-50">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center  items-center w-full p-2.5 m-10 animate-titleAppear"
        >
          <input
            onChange={handleChange}
            type="text"
            value={item}
            className="border-2 border-solid border-gray-400 bg-white w-1/3 h-12 pl-2 focus:outline-none  focus:border-customGreen"
            placeholder="Add a product"
          />
          <button className="flex justify-center items-center ml-4 p-3 rounded-full bg-customGreen hover:scale-125 hover:shadow-2xl transition delay-150 duration-300 ease-in-out">
            <AiOutlinePlus size={25} color={"white"} />
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddItem;
