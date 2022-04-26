import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Items = ({ id, item, list, setList }) => {
  const deleteItem = (id) => {
    setList(list.filter((el) => el.id !== id));
  };
  return (
    <div className="flex justify-between py-4 animate-titleAppear">
      <p>{item}</p>
      <button
        onClick={() => deleteItem(id)}
        className="hover:scale-150 transition delay-150 duration-300 ease-in-out"
      >
        <IoCloseOutline size={20} />
      </button>
    </div>
  );
};

export default Items;
