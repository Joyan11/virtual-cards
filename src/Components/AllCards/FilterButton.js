/** @format */

import { BsFilter } from "react-icons/bs";
import { useMainContext } from "../../context/MainContext";

export const FilterButton = () => {
  const { dispatch } = useMainContext();
  return (
    <button
      onClick={() => dispatch({ type: "SHOW_MODAL" })}
      className="filter-button">
      <BsFilter className="text-2xl" />
      <span>Filter</span>
    </button>
  );
};
