/** @format */

import { AiOutlineSearch } from "react-icons/ai";

export const Search = ({ showInput, setShowInput, setText }) => {
  return (
    <>
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
    </>
  );
};
