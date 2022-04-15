import React, { useState } from "react";
// import "./Header.css";
import { NavLink } from "react-router-dom";
import { FaAlignLeft } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
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
    <div className="w-full z-10 fixed py-5 shadow bg-gray-800 ">
      <div className="container  mx-auto">
        <nav className="md:flex justify-between items-center">
          <div className="flex justify-between  items-center">
            <div onClick={() => setOpen(!open)} className="md:hidden">
              {open ? (
                <BsXLg className="text-white" />
              ) : (
                <FaAlignLeft className="text-white" />
              )}
            </div>
            <div className="logo">
              <NavLink onClick={handleClose} to="/">
                <h1>MarkHosts</h1>
              </NavLink>
            </div>
          </div>
          <div className="duration-500 ease-in flex justify-center">
            <ul
              className={`text-sm uppercase  flex-none  mx-auto md:flex ${
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
              <li>
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="ml-4  border-0 bg-transparent text-red-500  "
                  >
                    Sign Out
                  </button>
                ) : (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-[orange] ml-4" : " ml-4 text-white"
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
