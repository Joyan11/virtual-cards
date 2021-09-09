/** @format */
import { BiMenu } from "react-icons/bi";
import { BsFillGridFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useMainContext } from "../context/MainContext";

export const Navbar = () => {
  const { dispatch } = useMainContext();
  return (
    <nav className="w-full ">
      <div className="flex justify-between px-5 md:px-24 py-3 border-solid border-coolgray-300 border-b-2 items-center">
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
