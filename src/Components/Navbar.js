/** @format */
import { BiMenu } from "react-icons/bi";
import { BsFillGridFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useMainContext } from "../context/MainContext";
import { AiOutlineVideoCamera, AiOutlinePlus } from "react-icons/ai";

export const Navbar = () => {
  const { dispatch } = useMainContext();
  return (
    <nav className="w-full ">
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between px-5 md:px-20 py-2 items-start md:items-center flex-wrap">
        <div className="flex items-center space-x-2 pt-2">
          <h1 className="text-2xl font-extrabold">Virtual Cards</h1>
          <span className="flex items-center text-blue-400 font-semibold bg-gray-100 rounded px-1 space-x-1 cursor-pointer">
            <AiOutlineVideoCamera />
            <span>Learn more</span>
          </span>
        </div>
        <button className="self-end flex items-center space-x-3 px-3 py-1 font-semibold shadow-md">
          <AiOutlinePlus />
          <span>Virtual Card</span>
        </button>
      </div>
      <div className="flex justify-between px-5 md:px-20 py-3 border-solid border-coolgray-300 border-b-2 items-center">
        <div className="flex space-x-3 text-gray-400 text-1xl items-center">
          <NavLink to="/mycards" activeClassName="active" end>
            Your
          </NavLink>
          <NavLink to="/" activeClassName="active" end>
            All
          </NavLink>
          <NavLink to="/blockedcards" end activeClassName="active">
            Blocked
          </NavLink>
        </div>
        <div className=" hidden md:flex items-center space-x-5 text-1xl hidden ">
          <p>
            <BsFillGridFill
              className="cursor-pointer"
              onClick={() => dispatch({ type: "CHANGE_VIEW", payload: "grid" })}
            />
          </p>
          <p>
            <BiMenu
              className="cursor-pointer text-2xl"
              onClick={() => dispatch({ type: "CHANGE_VIEW", payload: "list" })}
            />
          </p>
        </div>
      </div>
    </nav>
  );
};
