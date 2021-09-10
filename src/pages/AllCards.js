/** @format */

import React, { useState } from "react";
import { Card } from "../Components/Card";
import { useMainContext } from "../context/MainContext";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";

export const AllCards = () => {
  const { view, allData } = useMainContext();
  const [text, setText] = useState("");
  const [showInput, setShowInput] = useState(false);

  let searchedResult = allData.data.filter((details) =>
    details.name.toLowerCase().trim().includes(text.toLowerCase().trim())
  );

  const renderedCards = React.Children.toArray(
    searchedResult.map((details) => {
      return <Card details={details} />;
    })
  );

  return (
    <div>
      <div className="box flex justify-end pt-3 space-x-3 items-center">
        <AiOutlineSearch
          className="text-2xl cursor-pointer"
          onClick={() => setShowInput((showInput) => !showInput)}
        />
        {showInput && (
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            autofocus
            className="ring-2 ring-pink-500 focus:ring-pink-700 focus:ring-4 outline-none rounded px-2 w-full max-w-sm "
          />
        )}
        <div className="flex items-center px-4 py-1 bg-gray-200 rounded text-gray-500 font-semibold cursor-pointer">
          <BsFilter className="text-2xl" />
          <span>Filter</span>
        </div>
      </div>
      <div
        className={`mt-2 md:mt-4 flex flex-wrap justify-center items-center ${
          view === "list" ? "flex-col" : "flex-row"
        } `}>
        {renderedCards}
      </div>
    </div>
  );
};
