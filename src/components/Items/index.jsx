import React from "react";

const Items = ({ item }) => {
  console.log(item);
  return (
    <div>
      <p>{item}</p>
    </div>
  );
};

export default Items;
