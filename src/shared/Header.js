import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import logo from "../images/logo.jpg";
import { toast } from "react-toastify";

const Header = () => {
  let {  logOut, setUser, setLoading, user } = useContext(AuthContext);
  let navigate = useNavigate();

  let navStyle = "text-white text-left px-4 bg-[#232426] ";

  let menu = (
    <>
      <div className="my-4">
        <NavLink
          className={({ isActive }) =>
            isActive ? `${navStyle} text-amber-400` : navStyle
          }
          to="/services"
        >
          Services
        </NavLink>
      </div>
      <div className="my-4">
        <NavLink
          className={({ isActive }) =>
            isActive ? `${navStyle} text-amber-400` : navStyle
          }
          to="/blogs"
        >
          Blogs
        </NavLink>
      </div>
      <div className="my-4">
        <NavLink
          className={({ isActive }) =>
            isActive ? `${navStyle} text-amber-400` : navStyle
          }
          to="/add-service"
        >
          Add Service
        </NavLink>
      </div>
    </>
  );

  let logoutClicked = () => {
    logOut()
      .then(() => setUser(null))
      .catch(() => setUser(null));
    toast.success("Successfully Logged Out");
    navigate("/login");
    setLoading(false);
    localStorage.removeItem("token")
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar text-white bg-[#232426] p-3">
        <div className="navbar-start">
          {/* drop down  */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow text-white bg-[#232426] rounded-box w-52"
            >
              {menu}
            </ul>
          </div>

          {/* left overs  */}
          <NavLink to="/" className="h-14 normal-case text-xl">
            <img className="h-full rounded-xl" src={logo} alt="" />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menu}</ul>
        </div>
        <div className="navbar-end">
          {!user ? (
            <NavLink to="/login" className="btn btn-success btn-outline">
              Login
            </NavLink>
          ) : (
            <div>
              <p
                onClick={logoutClicked}
                className="btn btn-error"
              >
                Log Out
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
