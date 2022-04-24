import React from "react";
import { useState, useEffect, Fragment } from "react";

const List = () => {
  const [article, setArticle] = useState([]);

  const addArticle = (e) => {
    setArticle(e.target.value);
  };

  return (
    <Fragment>
      <div className="flex flex-col items-center min-h-screen w-full p-10">
        <form className="flex justify-center align-middle p-2.5 m-10 animate-titleAppear">
          <input
            onChange={addArticle}
            type="text"
            value={article}
            className="border-2 border-solid h-10 pl-2"
            placeholder="Add a product"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default List;
