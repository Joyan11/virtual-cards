/** @format */

import React, { useEffect, useState } from "react";
import { Card } from "../Components/Card";
import { useMainContext } from "../context/MainContext";
import { BsFilter } from "react-icons/bs";
import { Search } from "../Components/AllCards/Search";
import { FilterModal } from "../Components/AllCards/FilterModal";

export const AllCards = () => {
  const { view, allData, cardType, cardHolder, modal, dispatch } =
    useMainContext();
  const [text, setText] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [activateFilters, setActivateFilters] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const filterByCardType = (data, filter) => {
    if (filter.length > 0) {
      return data.filter((cardData) => filter.includes(cardData.card_type));
    } else {
      return data;
    }
  };
  const filterByHolder = (prevdata, filter) => {
    if (filter !== "default") {
      return prevdata.filter((cardData) => cardData.owner_name === filter);
    } else {
      return prevdata;
    }
  };

  const searchResult = (prevData) => {
    return prevData.filter((details) =>
      details.name.toLowerCase().trim().includes(text.toLowerCase().trim())
    );
  };

  useEffect(() => {
    const data = searchResult(
      filterByHolder(filterByCardType(allData.data, cardType), cardHolder)
    );
    setFilteredData(data);
  }, [activateFilters, text]);

  const renderedCards = React.Children.toArray(
    filteredData.map((details) => {
      return <Card details={details} />;
    })
  );

  return (
    <section>
      <div className="box flex justify-end pt-3 space-x-3 items-center">
        <Search
          setShowInput={setShowInput}
          setText={setText}
          showInput={showInput}
        />
        <button
          onClick={() => dispatch({ type: "SHOW_MODAL" })}
          className="flex items-center px-4 py-1 bg-gray-200 rounded text-gray-500 font-semibold cursor-pointer">
          <BsFilter className="text-2xl" />
          <span>Filter</span>
        </button>
      </div>
      <div
        className={`mt-2 md:mt-4 flex flex-wrap justify-center items-center ${
          view === "list" ? "flex-col" : "flex-row"
        } `}>
        {renderedCards}
        {modal && (
          <FilterModal
            data={allData.data}
            setActivateFilters={setActivateFilters}
          />
        )}
      </div>
    </section>
  );
};
