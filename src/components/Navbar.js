import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [checkbox, setCheckbox] = useState(false);
  // navbar sticky to when scroll start
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 151
        ? setStickyClass("fixed top-0 left-0 z-50 bg-white shadow-lg")
        : setStickyClass("relative");
    }
  };
  // navbar sticky to when scroll end

  // active link
  let activeStyle = {
    color: "blue",
  };

  return (
    <header>
      {/* navbar */}
      <nav className={`w-full ${stickyClass}`}>
        <div className="flex justify-between items-center py-5 m-0 container mx-auto relative px-5">
          {/* md and lg navigation start*/}
          <div>
            <Link to="/">
              <h2 className="text-2xl sm:text-3xl text-primary flex itme-center gap-[2px]">
                <i class="ri-book-open-line"></i> TuteDude
              </h2>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex justify-between items-center md:gap-4 lg:gap-16">
              <div>
                <ul className="flex md:gap-3 lg:gap-6">
                  <li className="font-bold text-secondary">
                    <NavLink
                      to="blogs"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      My Assignment
                    </NavLink>
                  </li>
                  <li className="font-bold text-secondary">
                    <NavLink
                      to="contact"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Chat With Mentor
                    </NavLink>
                  </li>

                  <li className="dropdown dropdown-end font-bold">
                    <label
                      tabIndex={0}
                      className="hover:underline text-primary flex justify-center items-center gap-x-1"
                    >
                      <i class="ri-user-fill"></i>
                      profileName
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </label>
                    <ul
                      tabIndex={0}
                      className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <Link to="" className="justify-between">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link to="">Settings</Link>
                      </li>
                      <li>
                        <Link to="">Logout</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* md and lg navigation end*/}

          {/* Mobile navigation bar start*/}
          <label className="py-1 px-2 rounded-md text-white bg-gradient-to-r from-accent to-primary md:hidden">
            <Link
              to="appointment"
              onClick={() => setCheckbox(!checkbox)}
              className="flex justify-center items-center gap-x-1"
            >
              profileName
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
          </label>

          {checkbox && (
            <div className="absolute top-20 inset-x-4 z-10">
              <ul className="menu bg-base-100 shadow-lg rounded-box w-full p-2">
                <li className="font-bold">
                  <NavLink to="/home">My Assignment</NavLink>
                </li>
                <li className="font-bold">
                  <NavLink to="/about">Chat With Mentor</NavLink>
                </li>
              </ul>
            </div>
          )}
          {/* Mobile navigation bar end*/}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
