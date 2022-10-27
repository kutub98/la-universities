import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/LOGO.png";
import { AuthContext } from "../../Context/UserContext/UserContext";
import "./Header.css";
import { AiFillCloseSquare } from "react-icons/ai";
const Header = () => {
  const { user, removeUser } = useContext(AuthContext);
  const [openMenu, setOpenMenu] = useState(false);

  // Log Out user
  const logOut = () => {
    removeUser()
      .then(() => {})
      .catch(() => {});
  };

  
  return (
    <div>
      <header className="p-4  bg-white">
        <div className="container menuContainer ">
          <Link to="home" aria-label="Back to homepage" className="flex items-center p-2">
            <img src={logo} alt="" className=" h-16 w-70 items-center mt-2 hidden md:block lg:block" />
            <h1 className=" Hidden">LaU </h1>
          </Link>
          {openMenu ? (
            <ul
              className="menubar"
            >
              <li className="">
                <Link
                  to="home"
                  className=" font-bold items-center px-4 -mb-1 border-b-2 border-transparent text-green-600 border-green-800"
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link to="course" className=" font-bold items-center px-4 -mb-1 border-b-2 border-transparent">
                  Course
                </Link>
              </li>
              <li className="">
                <Link to="teachers" className=" font-bold items-center px-4 -mb-1 border-b-2 border-transparent">
                  Teachers
                </Link>
              </li>
              <li className="">
                <Link to="blog" className=" font-bold items-center px-4 -mb-1 border-b-2 border-transparent">
                  Blog
                </Link>
              </li>
              <li className="">
                <Link
                  to="askedQuestion"
                  className=" font-bold items-center px-4 -mb-1 border-b-2 border-transparent"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          ) : (
            <div className="openMenu lg-hidden ">
              <ul>
                <Link
                  to="home"
                  className=" font-bold items-center px-4 -mb-1 border-b-2 border-transparent text-green-600 border-green-800"
                >
                  Home
                </Link>
                <Link to="course" className=" font-bold items-center px-4 -mb-1 border-b-2 border-transparent">
                  Course
                </Link>
                <Link to="teachers" className=" font-bold items-center px-4 -mb-1 border-b-2 border-transparent">
                  Teachers
                </Link>
                <Link to="blog" className=" font-bold items-center px-4 -mb-1 border-b-2 border-transparent">
                  Blog
                </Link>
                <Link
                  to="askedQuestion"
                  className=" font-bold items-center px-4 -mb-1 border-b-2 border-transparent"
                >
                  FAQ
                </Link>
              </ul>
            </div>
          )}
          <div className="items-center loginRegister flex-shrink-0 hidden lg:flex">
            {user?.uid ? (
              <div className="loginRegister">
                <Link to='profile'>{user?.displayName}</Link>
                <button className="bg-green-600 py-3 px-2 text-white" onClick={logOut}>
                  Log Out
                </button>
              </div>
            ) : (
              <button className="bg-green-600 py-3 py-2"><Link className="text-white bg-green-600" to="/login">Sign in</Link></button>
            )}
          </div>
          <div
            className="h-5 w-5 openMenu md:hidden bg-white text-black ml-6 rounded"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? (
             <button title="" type="button" className="p-4 lg:hidden  rounded-lg bg-green-600">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
               className="w-6 h-6 text-white"
             >
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
             </svg>
           </button>
            ) : (
             <button className="rounded-lg bg-green-600 p-4 text-white font-extrabold">
               <AiFillCloseSquare className=" font-extrabold w-6 h-6 text-white"/>
             </button>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
