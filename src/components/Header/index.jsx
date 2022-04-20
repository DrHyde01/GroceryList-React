import React from "react";
import background from "../../images/foodPattern.png";

const Header = () => {
  return (
    <div className="flex justify-center align-center w-full h-auto p-16 bg-customGreen">
      <h1 className="title">My Grocery List</h1>
      <p className="subtitle">For my daily use</p>
    </div>
  );
};

export default Header;
