import React from "react";
import { useState, useEffect, Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
import ReactTooltip from "react-tooltip";
import { AiOutlinePlus } from "react-icons/ai";
import { IoBasketOutline, IoTrashOutline } from "react-icons/io5";
import Items from "../Items";

// First, get localStorage data if exists
const getLocalStorageData = () => {
  let list = localStorage.getItem("list");

  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const List = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState(getLocalStorageData);

  //Add item from the input
  const handleChange = (e) => {
    setItem(e.target.value);
  };

  // And move item to the state
  const handleSubmit = (e) => {
    const newItem = {
      item: item,
      id: uuidv4(),
    };
    e.preventDefault();
    setList([...list, newItem]);
    setItem("");
  };

  // Add state to LocalStorage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  // Clean state and localStorage
  const cleanItems = () => {
    setList([]);
  };

  return (
    <Fragment>
      <div className="flex flex-col items-center min-h-screen w-full px-6 md:px-20 lg:px-0 py-10 bg-gray-50">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row justify-center items-center w-full p-2.5 lg:m-10 animate-titleAppear"
        >
          <input
            onChange={handleChange}
            type="text"
            value={item}
            className="border-2 border-solid border-gray-400 bg-white w-full  md:w-1/2 lg:w-1/3 2xl:w-1/4 h-12 pl-2  focus:outline-none  focus:border-customGreen"
            placeholder="Add a product"
            required
          />
          <button
            className="flex justify-center items-center md:ml-4 mt-8 md:mt-0 p-3 rounded-full bg-customGreen hover:scale-110 hover:shadow-2xl transition delay-150 duration-300 ease-in-out"
            data-tip="Add a item"
            data-for="addBtn"
          >
            <ReactTooltip id="addBtn" place="top" type="light" effect="solid" />
            <AiOutlinePlus size={25} color={"white"} />
          </button>
        </form>

        {list.length > 0 ? (
          <Fragment>
            <div className="flex flex-col justify-start w-full md:w-3/4 lg:w-2/6 m-10 p-8 bg-customYellow shadow-lg -rotate-2 animate-titleAppear">
              {list.map((a, id) => (
                <Items
                  key={id}
                  id={a.id}
                  item={a.item}
                  list={list}
                  setList={setList}
                />
              ))}
            </div>
            <button
              onClick={cleanItems}
              className="flex justify-center items-center p-2 rounded-lg bg-customPink hover:shadow-2xl hover:scale-110 transition delay-150 duration-300 ease-in-out"
              data-tip="Delete your list"
              data-for="deleteBtn"
            >
              <ReactTooltip
                id="deleteBtn"
                place="top"
                type="light"
                effect="solid"
              />
              <IoTrashOutline size={28} color={"#FFFF"} />
            </button>
          </Fragment>
        ) : (
          <div className="flex flex-col justify-center items-center py-10 md:w-2/4">
            <p className="text-center text-gray-500 leading-8 mb-8">
              Your list is empty ! 🙁 <br />
              Add a item with the input above 👆🏻
            </p>
            <IoBasketOutline size={78} color={"#E0E0E0"} />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default List;
