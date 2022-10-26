import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/LOGO.png";
import { AuthContext } from "../../Context/UserContext/UserContext";
import './Header.css'
const Header = () => {
  const {user,removeUser} = useContext(AuthContext)
  
  // Log Out user
  const logOut =()=>{
    removeUser()
    .then(() =>{})
    .catch(() =>{})
  }
  return (
    <div>
      
      <header className="p-4 mb-2 items-center border border-2 bg-white text-gray-800">
        <div className="container flex justify-between  h-16 mx-auto">
          <Link to="home" aria-label="Back to homepage" className="flex items-center p-2">
            <img src={logo} alt="" className=" h-16 w-70 items-center mt-2" />
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link
                to="home"
                className="flex font-bold items-center px-4 -mb-1 border-b-2 border-transparent text-green-600 border-green-800"
              >
                Home
              </Link>
            </li>
            <li className="flex">
              <Link to="course" className="flex font-bold items-center px-4 -mb-1 border-b-2 border-transparent">
                Course
              </Link>
            </li>
            <li className="flex">
              <Link to="teachers" className="flex font-bold items-center px-4 -mb-1 border-b-2 border-transparent">
                Teachers
              </Link>
            </li>
            <li className="flex">
              <Link to="blog" className="flex font-bold items-center px-4 -mb-1 border-b-2 border-transparent">
                Blog
              </Link>
            </li>
            <li className="flex">
              <Link to="askedQuestion" className="flex font-bold items-center px-4 -mb-1 border-b-2 border-transparent">
                FAQ
              </Link>
            </li>
          </ul>
          <div className="items-center loginRegister flex-shrink-0 hidden lg:flex">
            {user?.uid ?
            <div>
              <h1>{user?.displayName}</h1>
              <button className="bg-green-600 py-2 px-2 text-white" onClick={logOut}>Log Out</button>
            </div> 
            : <Link to='/login'>Sign in</Link>
            }
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-white bg-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
