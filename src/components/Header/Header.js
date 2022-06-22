import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { FaAlignLeft } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import logo from "../../images/logo/markhost.svg";

const Header = () => {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="w-full backdrop-opacity-60  z-10 fixed py-5 shadow-sm bg-[#ffffff] mx-auto ">
      <div className="container  mx-auto ">
        <nav className="mx-auto   md:flex  items-center lg:flex lg:justify-between ">
          <div className="flex justify-between  items-center lg:flex-none">
            <div onClick={() => setOpen(!open)} className="md:hidden">
              {open ? (
                <BsXLg className="text-main" />
              ) : (
                <FaAlignLeft className="text-main" />
              )}
            </div>
            <div className="logo">
              <NavLink onClick={handleClose} to="/">
                <div className="flex items-center ">
                  <img src={logo} alt="MarkHost" width="30" />
                  <h1 className="text-2xl lg:text-3xl font-extrabold  text-main ">
                    MarkHosts
                  </h1>
                </div>
              </NavLink>
            </div>
          </div>
          <div className=" lg:ml-4 main-transition flex justify-center lg:flex items-center   lg:justify-start lg:items-center lg:pt-1 md:pt-1">
            <ul
              className={`text-sm uppercase  flex-none  mx-auto md:flex md:items-center ${
                open ? "top-10" : " hidden top-[-120px]"
              }`}
            >
              <li>
                <NavLink
                  onClick={handleClose}
                  className={({ isActive }) =>
                    isActive ? "text-second  ml-4 " : " ml-4 text-main"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleClose}
                  className={({ isActive }) =>
                    isActive ? "text-second  ml-4" : "ml-4 text-main"
                  }
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleClose}
                  className={({ isActive }) =>
                    isActive ? "text-second  ml-4 " : " ml-4 text-main"
                  }
                  to="/pricing"
                >
                  plans&price
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleClose}
                  className={({ isActive }) =>
                    isActive ? "text-second  ml-4 " : " ml-4 text-main"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="md:hidden mt-5">
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="ml-4 mb-5 bg-main text-[#ffffff] py-2.5 px-8 rounded-3xl uppercase text-[14px] font-semibold hover:bg-second transition-all duration-500  "
                  >
                    Sign Out
                  </button>
                ) : (
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "bg-main text-[#ffffff] py-2.5 px-8 rounded-3xl uppercase text-[14px] font-semibold hover:bg-second transition-all duration-500  ml-4 "
                        : " ml-4  bg-main text-[#ffffff] py-2.5 px-8 rounded-3xl uppercase text-[14px] font-semibold hover:bg-second transition-all duration-500 "
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
          <div
            className={` md:flex-1 lg:flex-1 flex justify-center md:flex md:justify-end lg:justify-end text-right  ${
              !open ? "top-10" : "flex"
            }`}
          >
            <button className="hidden  lg:flex md:flex  justify-center lg:justify-end items-center text-right bg-main text-[#ffffff] py-2.5 px-8 rounded-3xl uppercase text-[14px] font-semibold hover:bg-second transition-all duration-500 ">
              Login
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
