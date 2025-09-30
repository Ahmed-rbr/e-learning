import React from "react";

const Footer = () => {
  return (
    <footer className="flex bg-footer lg:gap-4 gap-12 flex-col lg:flex-row justify-between px-8 py-12">
      <div className="flex flex-col">
        <img className="w-fit" src="/images/logo/logo.svg" alt="" />
      </div>
      <div className="flex gap-12 ">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Sitemap</h2>
          <ul className=" flex text-secondary/40 gap-3 flex-col justify-between  font-medium">
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
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Company</h2>
          <ul className=" flex text-secondary/40 gap-3 flex-col justify-between  font-medium">
            <a
              className=" hover:cursor-pointer hover:text-accent duration-75  transition-all"
              href="#"
            >
              Our Team
            </a>
            <a
              className="hover:cursor-pointer hover:text-accent duration-75  transition-all"
              href="#"
            >
              career
            </a>
            <a
              className="hover:cursor-pointer hover:text-accent duration-75  transition-all"
              href="#"
            >
              Services
            </a>
            <a
              className="hover:cursor-pointer hover:text-accent duration-75  transition-all"
              href="#"
            >
              Affiliates{" "}
            </a>
          </ul>
        </div>
      </div>
      <ul className="flex  font-semibold flex-col gap-6">
        <li className="flex gap-2 items-center hover:cursor-pointer hover:text-accent duration-75  transition-all">
          <img className="w-6 h-6" src="/images/address.png" alt="" />
          925 Filbert Street Pennsylvania 18072
        </li>{" "}
        <li className="flex gap-2 items-center hover:cursor-pointer hover:text-accent duration-75  transition-all">
          <img className="w-6 h-6" src="/images/phone.png" alt="" />
          +1(909) 235-9814{" "}
        </li>{" "}
        <li className="flex gap-2 items-center hover:cursor-pointer hover:text-accent duration-75  transition-all">
          <img className="w-6 h-6" src="/images/email-.png" alt="" />
          info@gmail.com{" "}
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
