/** @format */

import React, { useState } from "react";
import { useMainContext } from "../../context/MainContext";

export const FilterModal = ({ data, setActivateFilters }) => {
  const { cardHolder, cardType, dispatch } = useMainContext();

  const cardTypeHandler = (e) => {
    if (e.target.checked) {
      dispatch({ type: "ADD_CARD_TYPE", payload: e.target.id });
    } else {
      dispatch({ type: "REMOVE_CARD_TYPE", payload: e.target.id });
    }
  };

  const cardHolderHandler = (e) => {
    dispatch({ type: "CARD_HOLDER", payload: e.target.value });
  };

  const clearFilter = () => {
    dispatch({ type: "CLEAR_FILTERS" });
    setActivateFilters((value) => !value);
  };

  return (
    <div className="h-full w-full bg-opacity-40 absolute top-0 right-0 bg-black">
      <div className="p-3 w-full max-w-xs md:max-w-sm  shadow-lg space-y-1 absolute bg-white top-32 right-7 md:right-40 rounded">
        <div className="border-b-2 flex justify-between">
          <h3 className="text-1xl font-semibold ">Filters</h3>
          <button onClick={() => dispatch({ type: "SHOW_MODAL" })}>
            Close
          </button>
        </div>

        <div className="p-3">
          <div className="space-y-4">
            <h3 className="text-gray-500 font-semibold">Type</h3>
            <div className="card-type-filter flex space-x-10">
              <div className="space-x-1">
                <input
                  type="checkbox"
                  name="subscription"
                  id="subscription"
                  onChange={cardTypeHandler}
                  checked={cardType.includes("subscription") ? true : false}
                />
                <label htmlFor="subscription">Subscription</label>
              </div>

              <div className="space-x-1">
                <input
                  type="checkbox"
                  name="burner"
                  id="burner"
                  onChange={cardTypeHandler}
                  checked={cardType.includes("burner") ? true : false}
                />
                <label htmlFor="burner">Burner</label>
              </div>
            </div>
            <div className="name-dropdown space-y-2">
              <h3 className="text-gray-500 font-semibold ">Cardholder</h3>
              <select
                name="card-holder"
                id="card-holder"
                value={cardHolder}
                className="border w-full p-2 bg-gray-200 rounded"
                onChange={cardHolderHandler}>
                <option value="default">Select cardholder</option>
                {React.Children.toArray(
                  data.map((details) => (
                    <option value={details.owner_name}>
                      {details.owner_name}
                    </option>
                  ))
                )}
              </select>
            </div>
            <div className="flex justify-around pt-3">
              <button
                className="px-12 py-1 bg-pink-700 rounded text-white font-semibold"
                onClick={() => setActivateFilters((value) => !value)}>
                Apply
              </button>
              <button
                className="px-12 py-1 shadow-md rounded font-semibold"
                onClick={clearFilter}>
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
