import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <div>
      <div className="">
        <nav className="flex flex-col md:flex-row lg:flex-row items-center justify-between font-poppins">
          <li className="text-xl mr-10 font-semibold text-blue-400">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl mr-10 font-semibold text-blue-400">
            <NavLink
              to="dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : ""
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li className="text-xl mr-10 font-semibold text-blue-400">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : ""
              }
            >
              notification
            </NavLink>
          </li>
          <li className="text-xl mr-10 font-semibold text-blue-400">
            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "" : ""
              }
            >
              Register
            </NavLink>
          </li>
        </nav>
      </div>
    </div>
  );
  return (
    <div>
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <a className="text-xl font-semibold"></a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end text-3xl">
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <summary tabIndex={0} className="btn btn-ghost rounded-btn">
                    <div className="avatar">
                      <div className="w-8 rounded-full">
                        {user?.photoURL ? (
                          <img
                            className="object-cover w-8 h-8 rounded-full"
                            src={user?.photoURL}
                          />
                        ) : (
                          <div className="text-3xl">
                            <FaRegUserCircle />
                          </div>
                        )}
                      </div>
                    </div>
                  </summary>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                  >
                    <li>
                      <a className="cursor-not-allowed">{user?.displayName}</a>
                    </li>
                    <Link>
                      <li>
                        <button onClick={handleLogOut}>Logout</button>
                      </li>
                    </Link>
                    <li>
                      {/* <button onClick={handleLogOut}>Logout</button> */}
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
