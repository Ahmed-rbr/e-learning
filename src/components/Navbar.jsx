import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="z-50 fixed top-0  bg-primary min-w-full py-3 shadow-lg px-4 flex justify-between items-start lg:items-center">
      <img
        className={`${
          open ? "hidden" : ""
        }  hover:cursor-pointer w-36 sm:w-fit`}
        src="/images/logo/logo.svg"
        alt=""
      />
      <ul className="hidden  lg:flex gap-6 justify-between text-xl font-medium">
        <a
          className=" hover:cursor-pointer hover:text-accent duration-75  transition-all"
          href="#home"
        >
          Home
        </a>
        <a
          className="hover:cursor-pointer hover:text-accent duration-75  transition-all"
          href="#courses"
        >
          Courses
        </a>
        <a
          className="hover:cursor-pointer hover:text-accent duration-75  transition-all"
          href="#mentor"
        >
          Mentor
        </a>
        <a
          className="hover:cursor-pointer hover:text-accent duration-75  transition-all"
          href="#contact"
        >
          Contact Us
        </a>
      </ul>
      <div className="hidden lg:flex gap-4 ">
        <button className="bg-accent text-white text-center hover:bg-accent-hover hover:text-accent font-semibold text-xl rounded-2xl px-6 py-2">
          Sign In
        </button>
        <button className="bg-accent-hover hover:bg-accent hover:text-white text-accent font-semibold text-xl rounded-2xl px-6 py-2">
          Sign Up
        </button>
      </div>

      {open && (
        <div
          className={`  w-full p-3  gap-6  flex-col bg-primary h-screen items-center  justify-center  z-50 `}
        >
          <div className="flex items-center justify-between mb-5  gap-5">
            <img className="w-fit" src="/images/logo/logo.svg" alt="" />
            <span
              onClick={() => setOpen(false)}
              className="bg-secondary rounded-full px-2 py-1 font-bold text-primary hover:bg-accent hover:cursor-pointer"
            >
              X
            </span>
          </div>
          <div className="flex flex-col  items-center">
            <ul className="flex flex-col items-center gap-6 mb-4 justify-between  font-medium">
              <a
                onClick={() => setOpen(false)}
                className=" hover:cursor-pointer hover:text-accent duration-75  transition-all"
                href="#home"
              >
                Home
              </a>
              <a
                onClick={() => setOpen(false)}
                className="hover:cursor-pointer hover:text-accent duration-75  transition-all"
                href="#courses"
              >
                Courses
              </a>
              <a
                onClick={() => setOpen(false)}
                className="hover:cursor-pointer hover:text-accent duration-75  transition-all"
                href="#mentor"
              >
                Mentor
              </a>
              <a
                onClick={() => setOpen(false)}
                className="hover:cursor-pointer hover:text-accent duration-75  transition-all"
                href="#contact"
              >
                Contact Us
              </a>
            </ul>
            <div className="flex flex-col  gap-4 ">
              <button
                onClick={() => setOpen(false)}
                className="bg-accent text-white text-center hover:bg-accent-hover hover:text-accent   rounded px-4 py-2"
              >
                Sign In
              </button>
              <button
                onClick={() => setOpen(false)}
                className="bg-accent-hover hover:bg-accent hover:text-white text-accent   rounded px-4 py-2"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}

      <img
        onClick={() => setOpen(true)}
        className={`${
          open ? "hidden" : ""
        } lg:hidden w-6 h-6 hover:cursor-pointer hover:text-accent duration-75  transition-all `}
        src="/images/burger.png"
        alt=""
      />
    </nav>
  );
};

export default Navbar;
