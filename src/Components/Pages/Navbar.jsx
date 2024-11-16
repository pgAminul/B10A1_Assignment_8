import { NavLink, useLocation } from "react-router-dom";
import "../../App.css";
import { useContext, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CartContext } from "../ContextApi/Context";

function Navbar() {
  const { cartItems, wishlistitem } = useContext(CartContext);
  const cart = cartItems.length;
  const wish = wishlistitem.length;
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const location = useLocation();
  const navStyle = {
    backgroundColor:
      location.pathname === "/" ? "rgba(149, 56, 226, 1)" : "white",
    color: location.pathname === "/" ? "white" : "black",
  };
  return (
    <div
      style={navStyle}
      className="navbar px-4 backdrop-blur-xl py-3 fixed z-50 flex justify-between items-center bg-base-100 "
    >
      <div className="navbar-start">
        <h2 className="font-bold text-2xl ">Gadget Heaven</h2>
      </div>
      <div className="text-2xl md:hidden" onClick={() => handleToggle()}>
        {toggle ? <IoMdClose /> : <FaBarsStaggered />}
      </div>
      <div
        className={`lg:flex justify-between w-[100%] items-center z-10 absolute t md:static text-center  lg:bg-transparent bg-gray-400 p-10 lg:p-0 left-0 ${
          toggle ? "block" : "hidden"
        }`}
      >
        <ul className="lg:flex gap-x-3  md:w-fit navbarActive items-center ">
          <li className="pt-5 md:pt-0 mt-2 lg:mt-0">
            <NavLink className={`px-4 py-3 rounded-lg  font-bold`} to={"/"}>
              Home
            </NavLink>
          </li>
          <li className="pt-5 md:pt-0  mt-2 lg:mt-0 ">
            <NavLink
              className={`px-4 py-3 rounded-lg  font-bold`}
              to={"/grapPage"}
            >
              Statistics
            </NavLink>
          </li>
          <li className="pt-5 md:pt-0 mt-2 lg:mt-0 mb-6 lg:mb-0">
            <NavLink
              className={`px-4 py-3 rounded-lg font-bold`}
              to={"/deshboard"}
            >
              DeshBoard
            </NavLink>
          </li>
          <li className="pt-5 md:pt-0 mt-2 lg:mt-0 mb-6 lg:mb-0">
            <NavLink
              className={`px-4 py-3 rounded-lg font-bold`}
              to={"/shoppingAbout"}
            >
              About
            </NavLink>
          </li>
        </ul>
        <div className="btnForLoginSing gap-5 items-center font-bold text-2xl flex">
          <div class="indicator ">
            <span class="indicator-item badge badge-secondary">{wish}</span>
            <button class="btn">
              <CiHeart />
            </button>
          </div>

          <div class="indicator ">
            <span class="indicator-item badge badge-secondary">{cart}</span>
            <button class="btn">
              <FaCartArrowDown></FaCartArrowDown>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
