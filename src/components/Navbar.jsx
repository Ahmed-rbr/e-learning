const Navbar = () => {
  return (
    <nav className="z-50 fixed top-0  bg-primary min-w-full py-3 shadow-lg px-4 flex justify-between items-center">
      <img
        className="hover:cursor-pointer w-36 sm:w-fit"
        src="/images/logo/logo.svg"
        alt=""
      />
      <ul className="hidden lg:flex gap-6 justify-between text-xl font-medium">
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
      <img className="lg:hidden w-6 h-6 " src="/images/burger.png" alt="" />
    </nav>
  );
};

export default Navbar;
