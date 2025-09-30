import React from "react";
import Search from "./Search";

const HeroSection = () => {
  return (
    <article
      id="home"
      className="z-0 pt-15 flex-col md:flex-row items-center  flex min-w-full px-6  justify-between bg-primary"
    >
      <section className="md:w-2/4 w-full">
        <div className="flex  mb-8 items-center gap-4">
          <img src="../../public/images/banner/check.svg" alt="" />
          <h3 className="font-semibold text-center tracking-wider text-green-500">
            Get 30% off on first enroll
          </h3>
        </div>
        <h1 className=" tracking-wide  mb-8 leading-snug text-3xl md:text-6xl font-bold">
          Learn Engineering From Top Experts
        </h1>
        <p className="text-xl mb-8 text-secondary tracking-wide font-normal ">
          Build skills with our courses and mentor from world-class companies.
        </p>

        <Search
          placeholder={"Search engineering courses..."}
          img={"/images/banner/search.svg"}
        />
        <ul className="grid gap-4  text-sm  md:text-xl grid-cols-1 sm:grid-cols-2">
          <li className="flex gap-2 items-center">
            <img src="/images/banner/check-circle.svg" />
            <p>Flexible Schedules</p>
          </li>
          <li className="flex gap-2 items-center">
            {" "}
            <img src="/images/banner/check-circle.svg" />
            <p>Guided Learning Paths</p>
          </li>
          <li className="flex gap-2 items-center">
            <img src="/images/banner/check-circle.svg" />
            <p>Peer Support Community</p>
          </li>
        </ul>
      </section>

      <img className="md:w-2/4 w-full" src="/images/banner/mahila.png" alt="" />
    </article>
  );
};

export default HeroSection;
