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
      <div className="heading-nav">
        <div className="flex items-center space-x-2 pt-2">
          <h1 className="text-2xl font-extrabold">Virtual Cards</h1>
          <span className="learn-more">
            <AiOutlineVideoCamera />
            <span>Learn more</span>
          </span>
        </div>
        <button className="virtual-card">
          <AiOutlinePlus />
          <span>Virtual Card</span>
        </button>
      </div>
      <div className="navlink border-coolgray-300">
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
